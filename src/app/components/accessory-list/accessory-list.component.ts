import { Component } from '@angular/core';
import { AccessoryService } from './accessory.service';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent {
  accessoryList: { name: string, type: string, price: number, brand: string, availability: boolean }[] = [];
  newAccessory = { name: '', type: '', price: 0, brand: '', availability: false };

  constructor(private accessoryService: AccessoryService) {}

  ngOnInit() {
    this.accessoryList = this.accessoryService.getAccessories();
  }

  addAccessory() {
    if (this.newAccessory.name.trim() && this.newAccessory.type.trim() && this.newAccessory.brand.trim() && this.newAccessory.price > 0) {
      this.accessoryService.addAccessory({ ...this.newAccessory });
      this.newAccessory = { name: '', type: '', price: 0, brand: '', availability: false }; // Reset form
    } else {
      alert('Please fill in all the details for the accessory.');
    }
  }

  removeAccessory(name: string) {
    this.accessoryService.removeAccessory(name);
    this.accessoryList = this.accessoryService.getAccessories();
  }
}
