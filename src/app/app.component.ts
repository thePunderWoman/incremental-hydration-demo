import {
  ChangeDetectorRef,
  Component,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderCmp } from './header-cmp/header-cmp.component';
import { FooterCmp } from './footer-cmp/footer-cmp.component';
import { NavigationCmp } from './navigation-cmp/navigation-cmp.component';
import { ProductCmp } from './product-cmp/product-cmp.component';
import { DetailsCmp } from './details-cmp/details-cmp.component';
import { RecommendedCmp } from './recommended-cmp/recommended-cmp.component';
import { InfoWindowCmp } from './info-window-cmp/info-window-cmp.component';
import { CartService } from './cart.service';

export function addLoadedCount() {
  if (typeof window !== 'undefined') {
    if (!(window as any).__loadedCount) {
      (window as any).__loadedCount = signal(0);
      (window as any).__loadedCountNum = 0;
    }
    (window as any).__loadedCount.update((current: number) => current + 1);
    (window as any).__loadedCountNum++;
  }
}

export function addHydratedCount() {
  if (typeof window !== 'undefined') {
    if (!(window as any).__hydratedCount) {
      (window as any).__hydratedCount = signal(0);
      (window as any).__hydratedCountNum = 0;
    }
    (window as any).__hydratedCount.update((current: number) => current + 1);
    (window as any).__hydratedCountNum++;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderCmp,
    FooterCmp,
    NavigationCmp,
    ProductCmp,
    DetailsCmp,
    RecommendedCmp,
    InfoWindowCmp,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'event-delegation';
  service = inject(CartService);
  cdr = inject(ChangeDetectorRef);
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  addToCart(total: number) {
    console.log('Added to cart', total);
    this.service.addProduct(total);
    this.cdr.detectChanges();
  }

  topLevelClick() {
    console.log('TopLevelClick');
  }

  midLevelClick() {
    console.log('MidLevelClick');
  }

  hydratedInsideDehydrated() {
    console.log('hydratedInsideDehydrated');
  }
}
