import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  menu: { name: string, price: number, category: string }[] = [
    { name: 'Spaghetti Bolognese', price: 250, category: 'Main Course' },
    { name: 'Caesar Salad', price: 150, category: 'Appetizer' },
    { name: 'Chocolate Cake', price: 120, category: 'Dessert' }
  ];

  // Initialize new food item with default values
  newFoodItem = { name: '', price: 0, category: '' };

  // Add a new food item to the menu
  addFoodItem() {
    if (this.newFoodItem.name.trim() && this.newFoodItem.price > 0 && this.newFoodItem.category.trim()) {
      this.menu.push({ ...this.newFoodItem });
      this.newFoodItem = { name: '', price: 0, category: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the food item.');
    }
  }

  // Remove a food item by name
  removeFoodItem(foodName: string) {
    this.menu = this.menu.filter(item => item.name !== foodName);
  }
}
