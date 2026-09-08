import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollState } from '../../core/scroll-state';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly scroll = inject(ScrollState);

  readonly open = signal(false);
  /** La barre se compacte et s'ombre des le premier pixel defile. */
  readonly scrolled = computed(() => this.scroll.y() > 8);

  toggle() { this.open.update(v => !v); }
  close() { this.open.set(false); }
}
