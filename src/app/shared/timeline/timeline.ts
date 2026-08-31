import { Component, input } from '@angular/core';
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
}
