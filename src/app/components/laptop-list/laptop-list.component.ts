import { Component } from '@angular/core';
import { LaptopService } from './laptop.service';
import { Laptop } from './laptop.model';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  laptopList: { brand: string, model: string, price: number }[] = [];
  newLaptop = { brand: '', model: '', price: 0 };

  constructor(private laptopService: LaptopService) {
    // Initialize the laptop list from the service
    this.laptopList = this.laptopService.getLaptops();
  }

  // Add a new laptop
  addLaptop() {
    if (this.newLaptop.brand.trim() && this.newLaptop.model.trim() && this.newLaptop.price > 0) {
      this.laptopService.addLaptop({ ...this.newLaptop });
      this.newLaptop = { brand: '', model: '', price: 0 }; // Reset the form
    } else {
      alert('Please fill in all the details for the laptop.');
    }
  }

  // Remove a laptop
  removeLaptop(model: string) {
    this.laptopService.removeLaptop(model);
    this.laptopList = this.laptopService.getLaptops(); // Refresh the list
  }
}
