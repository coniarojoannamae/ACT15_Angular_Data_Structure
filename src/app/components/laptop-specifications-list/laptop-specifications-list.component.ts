import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
  // Initial list of laptops with specifications
  laptopList: { brand: string, model: string, processor: string, ram: string, storage: string, price: number }[] = [
    { brand: 'Apple', model: 'MacBook Pro', processor: 'M1', ram: '16GB', storage: '512GB SSD', price: 2400 },
    { brand: 'Dell', model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', price: 1500 },
    { brand: 'HP', model: 'Spectre x360', processor: 'Intel i7', ram: '16GB', storage: '1TB SSD', price: 1600 }
  ];

  // Initialize new laptop with default values
  newLaptop = { brand: '', model: '', processor: '', ram: '', storage: '', price: 0 };

  // Add a new laptop to the list
  addLaptop() {
    if (this.newLaptop.brand.trim() && this.newLaptop.model.trim() && this.newLaptop.processor.trim() && this.newLaptop.ram.trim() && this.newLaptop.storage.trim() && this.newLaptop.price > 0) {
      this.laptopList.push({ ...this.newLaptop });
      this.newLaptop = { brand: '', model: '', processor: '', ram: '', storage: '', price: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the laptop.');
    }
  }

  // Remove a laptop by model
  removeLaptop(model: string) {
    this.laptopList = this.laptopList.filter(laptop => laptop.model !== model);
  }
}
