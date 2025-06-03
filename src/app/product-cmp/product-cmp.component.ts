import { Component, HostBinding, PLATFORM_ID } from '@angular/core';
import { addLoadedCount, addHydratedCount } from '../app.component';
import { isPlatformBrowser } from '@angular/common';

addLoadedCount();

@Component({
  selector: 'product-cmp',
  standalone: true,
  imports: [],
  templateUrl: './product-cmp.component.html',
  styleUrl: './product-cmp.component.scss',
})
export class ProductCmp {
  constructor() {
    addHydratedCount();
    if (this.isClient) {
      this.dehydrated = false;
      this.hydrated = true;
    }
  }

  @HostBinding('class.dehydrated') dehydrated: boolean = true;
  @HostBinding('class.hydrated') hydrated: boolean = false;

  get isClient() {
    return isPlatformBrowser(PLATFORM_ID);
  }
}
