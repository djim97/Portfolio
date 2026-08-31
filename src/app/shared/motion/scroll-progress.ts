import {
  DOCUMENT,
  Directive,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ScrollState } from '../../core/scroll-state';

/**
 * Expose `--through` : 0 quand le haut de l'element atteint le bas de l'ecran,
 * 1 quand son bas y arrive a son tour. Sert a dessiner un trait au fil du
 * defilement (transform: scaleY(var(--through))).
 */
@Directive({ selector: '[appScrollProgress]' })
export class ScrollProgress {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly scroll = inject(ScrollState);
  private readonly doc = inject(DOCUMENT);
  private readonly active = signal(false);

  constructor() {
    afterNextRender(() => this.active.set(true));

    effect(() => {
      const node = this.el.nativeElement;
      if (!this.active()) return;

      // Sans animation, le trait est simplement dessine en entier.
      const view = this.doc.defaultView!;
      if (view.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        node.style.setProperty('--through', '1');
        return;
      }

      this.scroll.y();
      const rect = node.getBoundingClientRect();
      const line = view.innerHeight * 0.8;
      const done = (line - rect.top) / (rect.height || 1);
      node.style.setProperty('--through', Math.min(Math.max(done, 0), 1).toFixed(3));
    });
  }
}
