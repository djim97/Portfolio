import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SEARCH_DESCRIPTION, SHARE_DESCRIPTION } from './profile.data';

/**
 * Pose les descriptions depuis `profile.data.ts`, seule source de verite.
 *
 * Elles etaient jusqu'ici recopiees en dur dans index.html, ce qui les a
 * laissees derriver quand l'accroche a change. Le site etant prerendu, ces
 * balises sont figees dans le HTML statique au moment du build : les robots
 * sociaux et les moteurs les lisent sans executer de JavaScript.
 *
 * `updateTag` cree la balise si elle est absente, il n'y a donc plus rien a
 * declarer dans index.html pour ces deux valeurs.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({ name: 'description', content: SEARCH_DESCRIPTION });
    this.meta.updateTag({ property: 'og:description', content: SHARE_DESCRIPTION });
  }
}
