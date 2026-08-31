import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

/** Couleur de la barre de navigateur, par theme. */
const BAR_COLOR: Record<Theme, string> = {
  dark: '#12100E',
  light: '#FBF7F1',
};

/**
 * Le theme initial est deja pose sur <html data-theme> par le script inline
 * de index.html. Ce service se contente de le relire puis de le piloter.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly theme = signal<Theme>('dark');
  readonly isLight = computed(() => this.theme() === 'light');

  constructor() {
    const root = this.doc.documentElement;
    this.theme.set(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

    effect(() => {
      const theme = this.theme();
      root.setAttribute('data-theme', theme);
      this.doc.querySelector('meta[name="theme-color"]')?.setAttribute('content', BAR_COLOR[theme]);
      try {
        this.doc.defaultView?.localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        /* mode prive ou stockage bloque : le theme reste valable pour la session */
      }
    });
  }

  toggle() {
    this.theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }
}
