import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/project-card/project-card';
import { Icon } from '../../shared/icon/icon';
import { SectionHead } from '../../shared/section-head/section-head';
import { Timeline } from '../../shared/timeline/timeline';
import { Parallax } from '../../shared/motion/parallax';
import { Reveal } from '../../shared/motion/reveal';
import { IDENTITY, ABOUT, SKILLS, PARCOURS, PROJECTS } from '../../core/profile.data';

/** Decoupe le nom en mots puis en lettres, en gardant un index continu
 *  pour echelonner l'animation d'entree du titre. */
function splitName(name: string) {
  let index = 0;
  return name
    .split(' ')
    .map(word => ({ chars: [...word].map(char => ({ char, index: index++ })) }));
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard, Icon, SectionHead, Timeline, Reveal, Parallax],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly id = IDENTITY;
  readonly about = ABOUT;
  readonly skills = SKILLS;
  readonly parcours = PARCOURS;
  readonly featured = PROJECTS.filter(p => p.featured);

  readonly nameWords = splitName(IDENTITY.name);
}
