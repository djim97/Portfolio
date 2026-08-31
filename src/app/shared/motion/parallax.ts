import {
  DOCUMENT,
  Directive,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { ScrollState } from '../../core/scroll-state';

/**
 * Deplace legerement l'element a contre-courant du defilement.
 * La valeur est exposee en `--parallax`, a consommer dans le CSS du composant :
 *
 *   <figure [appParallax]="0.08">   ->   transform: translate3d(0, var(--parallax, 0), 0)
 */
@Directive({ selector: '[appParallax]' })
export class Parallax {
  /** Amplitude : 0 = fixe, 0.15 = deja tres visible. */
  readonly speed = input(0.08, { alias: 'appParallax' });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly scroll = inject(ScrollState);
  private readonly doc = inject(DOCUMENT);
  private readonly active = signal(false);

  constructor() {
    afterNextRender(() => {
      const view = this.doc.defaultView!;
      this.active.set(!view.matchMedia('(prefers-reduced-motion: reduce)').matches);
    });

    effect(() => {
      if (!this.active()) return;
      this.scroll.y();

      const node = this.el.nativeElement;
      const view = this.doc.defaultView!;
      const rect = node.getBoundingClientRect();
      // Distance entre le centre de l'element et le centre de l'ecran.
      const offset = rect.top + rect.height / 2 - view.innerHeight / 2;
      node.style.setProperty('--parallax', `${(-offset * this.speed()).toFixed(1)}px`);
    });
  }
}
