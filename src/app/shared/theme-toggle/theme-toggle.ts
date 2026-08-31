import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/theme';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  private readonly themes = inject(ThemeService);
  readonly isLight = this.themes.isLight;

  toggle() {
    this.themes.toggle();
  }
}
