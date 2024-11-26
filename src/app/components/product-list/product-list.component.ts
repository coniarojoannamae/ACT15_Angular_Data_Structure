import { Component } from '@angular/core';
import { ProductService } from './product-list.service';
import { Product} from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: { name: string; price: number; category: string }[] = [];
  newProduct = { name: '', price: 0, category: '' };

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    if (this.newProduct.name.trim() && this.newProduct.price > 0 && this.newProduct.category.trim()) {
      this.productService.addProduct({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, category: '' }; // Reset the form
      this.loadProducts();
    } else {
      alert('Please fill in all fields with valid values.');
    }
  }

  removeProduct(productName: string) {
    this.productService.removeProduct(productName);
    this.loadProducts();
  }
}
