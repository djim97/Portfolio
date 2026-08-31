import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { IDENTITY } from '../../core/profile.data';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly id = IDENTITY;
  readonly year = new Date().getFullYear();
}
