import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ScrollState } from '../../core/scroll-state';

/**
 * Filet d'avancement de lecture, fixe en haut de la fenetre.
 *
 * La largeur est pilotee par `transform: scaleX()` et non par `width` :
 * l'echelle se compose sur la couche graphique, sans reflow a chaque frame.
 * `ScrollState` ne mesure qu'une fois par frame, partage par tous.
 */
@Component({
  selector: 'app-reading-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="track" aria-hidden="true">
      <span class="bar" [style.transform]="scale()"></span>
    </div>
  `,
  styles: `
    .track {
      position: fixed;
      inset: 0 0 auto;
      z-index: 60;
      height: 2px;
      pointer-events: none;
    }
    .bar {
      display: block;
      height: 100%;
      transform-origin: left;
      background: var(--grad-warm);
    }
  `,
})
export class ReadingProgress {
  private readonly scroll = inject(ScrollState);
  protected readonly scale = computed(() => `scaleX(${this.scroll.progress().toFixed(4)})`);
}
