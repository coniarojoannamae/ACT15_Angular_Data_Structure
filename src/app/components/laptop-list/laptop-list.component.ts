import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',

  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  // Initial list of laptops
  laptopList: { brand: string, model: string, price: number }[] = [
    { brand: 'Dell', model: 'XPS 13', price: 1500 },
    { brand: 'HP', model: 'Spectre x360', price: 1300 }
  ];

  // Initialize new laptop with default values
  newLaptop = { brand: '', model: '', price: 0 };

  // Add a new laptop to the list
  addLaptop() {
    if (this.newLaptop.brand.trim() && this.newLaptop.model.trim() && this.newLaptop.price > 0) {
      this.laptopList.push({ ...this.newLaptop });
      this.newLaptop = { brand: '', model: '', price: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the laptop.');
    }
  }

  // Remove a laptop by model
  removeLaptop(model: string) {
    this.laptopList = this.laptopList.filter(laptop => laptop.model !== model);
  }
}
