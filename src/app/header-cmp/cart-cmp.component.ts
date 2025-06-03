import {
  Component,
  ElementRef,
  HostBinding,
  computed,
  inject,
} from '@angular/core';
import { CartService } from '../cart.service';
import { addLoadedCount, addHydratedCount } from '../app.component';

addLoadedCount();

@Component({
  selector: 'cart-cmp',
  standalone: true,
  imports: [],
  template: ` <p class="cmp-name">
    &lt;ShoppingCart&gt; &nbsp;&nbsp;&nbsp; {{ items() }} {{ label() }}
  </p>`,
  styles: `
    :host {
      padding: 10px;
      margin: 0px;
      border: inherit;
    }
    p.cmp-name {
      margin-top: 5px;
    }
  `,
})
export class CartCmp {
  service = inject(CartService);
  items = this.service.getProducts();
  label = computed(() => (this.items() === 1 ? 'item' : 'items'));

  constructor() {
    addHydratedCount();
  }
}
