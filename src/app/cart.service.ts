import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = signal(0);

  addProduct(total: number) {
    this.products.set(this.products() + total);
  }

  getProducts() {
    return this.products;
  }
}
