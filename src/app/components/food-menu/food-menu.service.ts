import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {
  private menu: { name: string; price: number; category: string }[] = [
    { name: 'Spaghetti Bolognese', price: 250, category: 'Main Course' },
    { name: 'Caesar Salad', price: 150, category: 'Appetizer' },
    { name: 'Chocolate Cake', price: 120, category: 'Dessert' },
  ];

  // Get the food menu
  getMenu() {
    return this.menu;
  }

  // Add a new food item
  addFoodItem(item: { name: string; price: number; category: string }) {
    this.menu.push(item);
  }

  // Remove a food item by name
  removeFoodItem(foodName: string) {
    this.menu = this.menu.filter((item) => item.name !== foodName);
  }
}
