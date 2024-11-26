import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private furnitureList: { itemName: string, category: string, price: number, material: string, quantityAvailable: number }[] = [
    { itemName: 'Dining Table', category: 'Table', price: 8000, material: 'Wood', quantityAvailable: 5 },
    { itemName: 'Office Chair', category: 'Chair', price: 3000, material: 'Leather', quantityAvailable: 10 },
    { itemName: 'Sofa', category: 'Sofa', price: 12000, material: 'Fabric', quantityAvailable: 2 }
  ];

  // Fetch the list of furniture items
  getFurnitureList() {
    return this.furnitureList;
  }

  // Add a new furniture item to the list
  addFurniture(furniture: { itemName: string, category: string, price: number, material: string, quantityAvailable: number }) {
    this.furnitureList.push(furniture);
  }

  // Remove a furniture item by its name
  removeFurniture(itemName: string) {
    this.furnitureList = this.furnitureList.filter(item => item.itemName !== itemName);
  }
}
