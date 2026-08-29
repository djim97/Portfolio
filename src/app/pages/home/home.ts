import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/project-card/project-card';
import { IDENTITY, ABOUT, SKILLS, PROJECTS } from '../../core/profile.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly id = IDENTITY;
  readonly about = ABOUT;
  readonly skills = SKILLS;
  readonly featured = PROJECTS.filter(p => p.featured);
}
