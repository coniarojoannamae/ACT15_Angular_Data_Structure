import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { name: 'Laptop', price: 75000, category: 'Electronics' },
    { name: 'Notebook', price: 50, category: 'Stationery' },
  ];

  getProducts() {
    return [...this.products]; // Return a copy of the product list
  }

  addProduct(product: { name: string; price: number; category: string }) {
    this.products.push(product);
  }

  removeProduct(productName: string) {
    this.products = this.products.filter(product => product.name !== productName);
  }
}
