import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventoryListService {
  private inventoryList: { itemName: string; quantity: number; price: number; category: string }[] = [
    { itemName: 'Laptop', quantity: 10, price: 50000, category: 'Electronics' },
    { itemName: 'Rice', quantity: 200, price: 40, category: 'Groceries' },
  ];

  // Get the inventory list
  getInventoryList() {
    return this.inventoryList;
  }

  // Add a new item to the inventory
  addItem(item: { itemName: string; quantity: number; price: number; category: string }) {
    this.inventoryList.push(item);
  }

  // Remove an item from the inventory by item name
  removeItem(itemName: string) {
    this.inventoryList = this.inventoryList.filter(item => item.itemName !== itemName);
  }
}
