import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { BackToTop } from './shared/back-to-top/back-to-top';
import { ReadingProgress } from './shared/reading-progress/reading-progress';
import { Seo } from './core/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BackToTop, ReadingProgress],
  templateUrl: './app.html',
})
export class App {
  /** Instancie le service : il pose les descriptions au rendu. */
  private readonly seo = inject(Seo);
}
