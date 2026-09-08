import { Component, input } from '@angular/core';

/**
 * En-tete de section editorial : index, libelle, filet, puis titre.
 *
 *   01 / à propos ──────────────────────
 *   Qui je suis
 *
 * Le filet se trace quand l'en-tete entre a l'ecran, via la classe `is-in`
 * posee par appReveal sur l'hote.
 */
@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.html',
  styleUrl: './section-head.css',
})
export class SectionHead {
  readonly index = input('');
  readonly label = input.required<string>();
  readonly heading = input.required<string>();
}
