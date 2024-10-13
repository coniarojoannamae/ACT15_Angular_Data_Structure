import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: { name: string, price: number, category: string }[] = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shampoo', price: 150, category: 'Personal Care' },
    { name: 'Bread', price: 50, category: 'Grocery' }
  ];

  newProduct = { name: '', price: 0, category: '' }; // Initialize price with a default value

  addProduct() {
    if (this.newProduct.name.trim() && this.newProduct.price && this.newProduct.category.trim()) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, category: '' }; // Reset form with default price
    }
  }
  removeProduct(productName: string) {
    this.products = this.products.filter(product => product.name !== productName);
  }
}
