import { Component, ElementRef, HostBinding } from '@angular/core';
import { addLoadedCount, addHydratedCount } from '../app.component';

addLoadedCount();

@Component({
  selector: 'footer-cmp',
  standalone: true,
  imports: [],
  templateUrl: './footer-cmp.component.html',
  styleUrl: './footer-cmp.component.scss',
})
export class FooterCmp {
  count = 0;

  constructor() {
    addHydratedCount();
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }
}
