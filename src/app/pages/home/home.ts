import { Component, inject, signal, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../shared/project-card/project-card';
import { ApiService } from '../../core/api.service';
import { IDENTITY, ABOUT, SKILLS, PROJECTS } from '../../core/profile.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private api = inject(ApiService);
  private platformId = inject(PLATFORM_ID);

  readonly id = IDENTITY;
  readonly about = ABOUT;
  readonly skills = SKILLS;
  readonly featured = PROJECTS.filter(p => p.featured);

  /** Signature du site : le hero interroge l'API de demonstration en direct. */
  readonly liveCount = signal<number | null>(null);

  ngOnInit(): void {
    // Uniquement cote navigateur : le prerendu ne doit pas figer une valeur.
    if (!isPlatformBrowser(this.platformId)) return;

    this.api.getStats().subscribe({
      next: s => this.liveCount.set(s.totalProjets),
      error: () => this.liveCount.set(null),
    });
  }
}
