import { DOCUMENT, Directive, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';

/**
 * Suit le pointeur au-dessus de l'element et expose sa position :
 *   --mx / --my  position du curseur en pourcentage de la carte
 *   --rx / --ry  inclinaison en degres, pour un leger effet de relief
 * La classe `is-lit` permet d'allumer les effets seulement au survol.
 */
@Directive({
  selector: '[appSpotlight]',
  host: {
    '(pointermove)': 'track($event)',
    '(pointerleave)': 'reset()',
    '[class.is-lit]': 'lit()',
  },
})
export class Spotlight {
  /** Inclinaison maximale en degres. 0 desactive le relief. */
  readonly tilt = input(3, { alias: 'appSpotlight' });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly doc = inject(DOCUMENT);
  private readonly enabled = signal(false);
  protected readonly lit = signal(false);

  constructor() {
    afterNextRender(() => {
      const view = this.doc.defaultView!;
      // Ni sur ecran tactile, ni si l'utilisateur a demande moins d'animations.
      this.enabled.set(
        view.matchMedia('(hover: hover) and (pointer: fine)').matches &&
          !view.matchMedia('(prefers-reduced-motion: reduce)').matches,
      );
    });
  }

  protected track(event: PointerEvent) {
    if (!this.enabled()) return;

    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tilt = this.tilt();

    node.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
    node.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    node.style.setProperty('--ry', `${((x - 0.5) * 2 * tilt).toFixed(2)}deg`);
    node.style.setProperty('--rx', `${((0.5 - y) * 2 * tilt).toFixed(2)}deg`);
    this.lit.set(true);
  }

  protected reset() {
    const node = this.el.nativeElement;
    node.style.setProperty('--ry', '0deg');
    node.style.setProperty('--rx', '0deg');
    this.lit.set(false);
  }
}
