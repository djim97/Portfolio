import { Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'download'
  | 'arrow-right'
  | 'arrow-out';

/**
 * Petites icones inline : pas de police ni de librairie externe.
 * Elles heritent de `currentColor`, donc elles suivent le theme et les survols.
 */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  readonly name = input.required<IconName>();
}
