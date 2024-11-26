import { Component } from '@angular/core';
import { LaptopSpecificationsService } from './laptop-specifications.service';
import { LaptopSpecifications } from './laptop-specifications.model';
@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrls: ['./laptop-specifications-list.component.css']
})
export class LaptopSpecificationsListComponent {
  laptopList: { brand: string, model: string, processor: string, ram: string, storage: string, price: number }[] = [];
  newLaptop = { brand: '', model: '', processor: '', ram: '', storage: '', price: 0 };

  constructor(private laptopService: LaptopSpecificationsService) {
    this.laptopList = this.laptopService.getLaptops(); // Initialize the list from the service
  }

  addLaptop() {
    if (this.newLaptop.brand.trim() && this.newLaptop.model.trim() && this.newLaptop.processor.trim() &&
        this.newLaptop.ram.trim() && this.newLaptop.storage.trim() && this.newLaptop.price > 0) {
      this.laptopService.addLaptop({ ...this.newLaptop });
      this.newLaptop = { brand: '', model: '', processor: '', ram: '', storage: '', price: 0 };  // Reset form
      this.laptopList = this.laptopService.getLaptops(); // Refresh the list
    } else {
      alert('Please fill in all the details for the laptop.');
    }
  }

  removeLaptop(model: string) {
    this.laptopService.removeLaptop(model);
    this.laptopList = this.laptopService.getLaptops(); // Refresh the list
  }
}
