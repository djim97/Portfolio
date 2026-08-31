import { DOCUMENT, Injectable, afterNextRender, inject, signal } from '@angular/core';

/**
 * Position de defilement partagee, mise a jour une seule fois par frame.
 * Evite que chaque composant pose son propre ecouteur de scroll.
 */
@Injectable({ providedIn: 'root' })
export class ScrollState {
  private readonly doc = inject(DOCUMENT);

  /** Defilement vertical en pixels. */
  readonly y = signal(0);
  /** Avancement dans la page, de 0 a 1. */
  readonly progress = signal(0);

  constructor() {
    afterNextRender(() => {
      const view = this.doc.defaultView!;
      const root = this.doc.documentElement;
      let queued = false;

      const measure = () => {
        queued = false;
        const y = view.scrollY;
        const travel = root.scrollHeight - view.innerHeight;
        this.y.set(y);
        this.progress.set(travel > 0 ? Math.min(y / travel, 1) : 0);
      };

      const onScroll = () => {
        if (queued) return;
        queued = true;
        view.requestAnimationFrame(measure);
      };

      view.addEventListener('scroll', onScroll, { passive: true });
      view.addEventListener('resize', onScroll, { passive: true });
      measure();
    });
  }
}
