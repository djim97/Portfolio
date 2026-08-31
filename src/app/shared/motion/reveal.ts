import {
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  OnDestroy,
  afterNextRender,
  effect,
  inject,
  input,
} from '@angular/core';

export type RevealVariant = '' | 'up' | 'left' | 'right' | 'zoom' | 'blur';

/**
 * Un seul IntersectionObserver pour toute l'application.
 * Il rejoue l'entree : un element rearme quand il repasse sous le bas de
 * l'ecran, de sorte que remonter puis redescendre relance l'animation.
 * En revanche il ne rearme jamais par le haut, sinon le contenu clignoterait
 * en sortant de l'ecran.
 */
@Injectable({ providedIn: 'root' })
export class RevealObserver implements OnDestroy {
  private observer: IntersectionObserver | null = null;

  observe(el: Element) {
    this.observer ??= new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
          } else if (entry.boundingClientRect.top > 0) {
            // L'element est repasse sous le bas de l'ecran : on rearme.
            entry.target.classList.remove('is-in');
          }
        }
      },
      // Declenche quand le haut de l'element a franchi 12 % du bas de l'ecran.
      { rootMargin: '0px 0px -12% 0px' },
    );
    this.observer.observe(el);
  }

  unobserve(el: Element) {
    this.observer?.unobserve(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

/**
 * Revele un element quand il arrive a l'ecran, et rejoue l'entree a chaque
 * nouveau passage.
 *
 *   <p appReveal>...</p>                       fondu + montee
 *   <img appReveal="left" [revealDelay]="120"> variante et decalage
 */
@Directive({
  selector: '[appReveal]',
  host: { '[attr.data-reveal]': 'variant()' },
})
export class Reveal {
  readonly variant = input<RevealVariant>('', { alias: 'appReveal' });
  readonly delay = input(0, { alias: 'revealDelay' });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly observer = inject(RevealObserver);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    const node = this.el.nativeElement;

    effect(() => node.style.setProperty('--reveal-delay', `${this.delay()}ms`));

    afterNextRender(() => {
      // Sans IntersectionObserver, on affiche tout de suite plutot que jamais.
      if (!('IntersectionObserver' in this.doc.defaultView!)) {
        node.classList.add('is-in');
        return;
      }
      this.observer.observe(node);
    });

    inject(DestroyRef).onDestroy(() => this.observer.unobserve(node));
  }
}
