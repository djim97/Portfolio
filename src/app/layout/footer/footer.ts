import { Component } from '@angular/core';
import { IDENTITY } from '../../core/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly id = IDENTITY;
  readonly year = new Date().getFullYear();
}
