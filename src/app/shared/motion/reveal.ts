import {
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  OnDestroy,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

export type RevealVariant = '' | 'up' | 'left' | 'right' | 'zoom' | 'blur';

/**
 * Un seul IntersectionObserver pour toute l'application. Chaque directive
 * s'abonne avec un rappel, l'observateur ne connait donc pas le DOM des hotes.
 *
 * L'entree est rejouee : un element rearme quand il repasse sous le bas de
 * l'ecran, de sorte que remonter puis redescendre relance l'animation. Il ne
 * rearme jamais par le haut, sinon le contenu clignoterait en sortant.
 */
@Injectable({ providedIn: 'root' })
export class RevealObserver implements OnDestroy {
  private observer: IntersectionObserver | null = null;
  private readonly targets = new Map<Element, (visible: boolean) => void>();

  observe(el: Element, notify: (visible: boolean) => void) {
    this.observer ??= new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          const notifyTarget = this.targets.get(entry.target);
          if (!notifyTarget) continue;

          if (entry.isIntersecting) {
            notifyTarget(true);
          } else if (entry.boundingClientRect.top > 0) {
            notifyTarget(false);
          }
        }
      },
      { threshold: 0.15 },
    );

    this.targets.set(el, notify);
    this.observer.observe(el);
  }

  unobserve(el: Element) {
    this.targets.delete(el);
    this.observer?.unobserve(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.targets.clear();
  }
}

/**
 * Revele un element quand il arrive a l'ecran, et rejoue l'entree a chaque
 * nouveau passage.
 *
 *   <p appReveal>...</p>
 *   <img appReveal="left" [appRevealDelay]="120">
 *
 * L'etat vit dans un signal et la classe est posee par liaison d'hote : aucune
 * ecriture directe dans le DOM. L'application etant zoneless, l'ecriture du
 * signal depuis le rappel de l'observateur declenche la detection a elle seule,
 * sans NgZone.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[attr.data-reveal]': 'variant()',
    '[class.revealed]': 'shown()',
    '[style.transition-delay]': 'delayCss()',
  },
})
export class Reveal {
  readonly variant = input<RevealVariant>('', { alias: 'appReveal' });
  readonly delay = input(0, { alias: 'appRevealDelay' });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly observer = inject(RevealObserver);
  private readonly doc = inject(DOCUMENT);

  protected readonly shown = signal(false);
  /** Le decalage echelonne l'entree ; le retrait, lui, est immediat. */
  protected readonly delayCss = computed(() => (this.shown() ? `${this.delay()}ms` : '0ms'));

  constructor() {
    const node = this.el.nativeElement;

    afterNextRender(() => {
      // Sans IntersectionObserver, on affiche tout de suite plutot que jamais.
      if (!('IntersectionObserver' in this.doc.defaultView!)) {
        this.shown.set(true);
        return;
      }
      this.observer.observe(node, visible => this.shown.set(visible));
    });

    inject(DestroyRef).onDestroy(() => this.observer.unobserve(node));
  }
}
