import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroceryListService {
  private groceryList: { name: string; quantity: number; category: string }[] = [
    { name: 'Apples', quantity: 5, category: 'Fruits' },
    { name: 'Milk', quantity: 2, category: 'Dairy' },
    { name: 'Carrots', quantity: 1, category: 'Vegetables' },
  ];

  // Get the list of grocery items
  getGroceryList() {
    return this.groceryList;
  }

  // Add a new grocery item
  addGroceryItem(item: { name: string; quantity: number; category: string }) {
    this.groceryList.push(item);
  }

  // Remove a grocery item by name
  removeGroceryItem(itemName: string) {
    this.groceryList = this.groceryList.filter((item) => item.name !== itemName);
  }
}
