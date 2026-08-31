import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/motion/reveal';
import { IDENTITY, PROJECTS } from '../../core/profile.data';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly id = IDENTITY;
  readonly projects = PROJECTS;
}
