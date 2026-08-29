import { Component, inject, signal, computed, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../core/api.service';
import { DemoStats } from '../../core/models';

type State = 'idle' | 'loading' | 'ready' | 'error';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo implements OnInit {
  private api = inject(ApiService);
  private platformId = inject(PLATFORM_ID);

  readonly state = signal<State>('idle');
  readonly stats = signal<DemoStats | null>(null);

  /** Part de chaque statut, pour la barre de repartition. */
  readonly statusShares = computed(() => {
    const s = this.stats();
    if (!s || s.totalProjets === 0) return [];
    return s.projetsByStatus.map(row => ({
      label: row.statut,
      count: Number(row.count),
      percent: Math.round((Number(row.count) / s.totalProjets) * 100),
    }));
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.load();
  }

  load(): void {
    this.state.set('loading');
    this.api.getStats().subscribe({
      next: s => { this.stats.set(s); this.state.set('ready'); },
      error: () => this.state.set('error'),
    });
  }

  formatBudget(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency', currency: 'XOF', maximumFractionDigits: 0,
    }).format(value);
  }
}
