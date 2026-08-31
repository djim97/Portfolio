import { DOCUMENT, Component, computed, inject } from '@angular/core';
import { ScrollState } from '../../core/scroll-state';

/** Perimetre du cercle de progression (r = 17). */
const RING = 2 * Math.PI * 17;

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BackToTop {
  private readonly doc = inject(DOCUMENT);
  private readonly scroll = inject(ScrollState);

  readonly ring = RING;
  /** Apparait une fois le premier ecran passe. */
  readonly visible = computed(() => this.scroll.y() > 640);
  readonly dash = computed(() => RING * (1 - this.scroll.progress()));

  toTop() {
    const view = this.doc.defaultView;
    const gentle = view?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    view?.scrollTo({ top: 0, behavior: gentle ? 'auto' : 'smooth' });
  }
}
