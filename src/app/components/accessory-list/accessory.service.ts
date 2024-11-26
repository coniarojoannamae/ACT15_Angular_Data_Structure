import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessoryService {
  private accessoryList: { name: string, type: string, price: number, brand: string, availability: boolean }[] = [
    { name: 'Wireless Charger', type: 'Charger', price: 2000, brand: 'Samsung', availability: true },
    { name: 'Silicone Case', type: 'Case', price: 500, brand: 'Apple', availability: false },
    { name: 'Bluetooth Headphones', type: 'Headphones', price: 3000, brand: 'Sony', availability: true }
  ];

  // Get the list of accessories
  getAccessories() {
    return this.accessoryList;
  }

  // Add a new accessory
  addAccessory(accessory: { name: string, type: string, price: number, brand: string, availability: boolean }) {
    this.accessoryList.push(accessory);
  }

  // Remove an accessory by name
  removeAccessory(name: string) {
    this.accessoryList = this.accessoryList.filter(accessory => accessory.name !== name);
  }
}
