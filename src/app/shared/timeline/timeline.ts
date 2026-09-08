import { Component, computed, input } from '@angular/core';
import { TimelineEntry } from '../../core/models';
import { Reveal } from '../motion/reveal';
import { ScrollProgress } from '../motion/scroll-progress';

@Component({
  selector: 'app-timeline',
  imports: [Reveal, ScrollProgress],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  readonly entries = input.required<TimelineEntry[]>();

  /**
   * Le type d'etape n'est affiche que s'il distingue reellement les entrees.
   * Trois fois « formation » a la suite n'apprend rien au lecteur.
   */
  readonly showKind = computed(() => new Set(this.entries().map(e => e.kind)).size > 1);
}
