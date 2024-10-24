import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  // Initial list of accessories
  accessoryList: { name: string, type: string, price: number, brand: string, availability: boolean }[] = [
    { name: 'Wireless Charger', type: 'Charger', price: 2000, brand: 'Samsung', availability: true },
    { name: 'Silicone Case', type: 'Case', price: 500, brand: 'Apple', availability: false },
    { name: 'Bluetooth Headphones', type: 'Headphones', price: 3000, brand: 'Sony', availability: true }
  ];

  // Initialize new accessory with default values
  newAccessory = { name: '', type: '', price: 0, brand: '', availability: false };

  // Add a new accessory to the list
  addAccessory() {
    if (this.newAccessory.name.trim() && this.newAccessory.type.trim() && this.newAccessory.brand.trim() && this.newAccessory.price > 0) {
      this.accessoryList.push({ ...this.newAccessory });
      this.newAccessory = { name: '', type: '', price: 0, brand: '', availability: false };  // Reset the form
    } else {
      alert('Please fill in all the details for the accessory.');
    }
  }

  // Remove an accessory by name
  removeAccessory(name: string) {
    this.accessoryList = this.accessoryList.filter(accessory => accessory.name !== name);
  }
}
