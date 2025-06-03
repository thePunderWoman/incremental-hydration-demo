import { Component, HostBinding, PLATFORM_ID } from '@angular/core';
import { addLoadedCount, addHydratedCount } from '../app.component';
import { isPlatformBrowser } from '@angular/common';

addLoadedCount();

@Component({
  selector: 'navigation-cmp',
  standalone: true,
  imports: [],
  templateUrl: './navigation-cmp.component.html',
  styleUrl: './navigation-cmp.component.scss',
})
export class NavigationCmp {
  constructor() {
    addHydratedCount();
  }
}
