import { Component, ElementRef, HostBinding } from '@angular/core';
import { CartCmp } from './cart-cmp.component';
import { addLoadedCount, addHydratedCount } from '../app.component';

addLoadedCount();

@Component({
  selector: 'header-cmp',
  standalone: true,
  imports: [CartCmp],
  templateUrl: './header-cmp.component.html',
  styleUrl: './header-cmp.component.scss',
})
export class HeaderCmp {
  constructor() {
    console.log('hydrated?');
    addHydratedCount();
  }
}
