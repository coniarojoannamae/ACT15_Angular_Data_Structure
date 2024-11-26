import { Component } from '@angular/core';
import { FoodMenuService } from './food-menu.service';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
})
export class FoodMenuComponent {
  menu: { name: string; price: number; category: string }[] = [];
  newFoodItem = { name: '', price: 0, category: '' };

  constructor(private foodMenuService: FoodMenuService) {
    this.menu = this.foodMenuService.getMenu();
  }

  // Add a new food item
  addFoodItem() {
    if (
      this.newFoodItem.name.trim() &&
      this.newFoodItem.price > 0 &&
      this.newFoodItem.category.trim()
    ) {
      this.foodMenuService.addFoodItem({ ...this.newFoodItem });
      this.newFoodItem = { name: '', price: 0, category: '' }; // Reset the form
    } else {
      alert('Please enter valid details for the food item.');
    }
  }

  // Remove a food item
  removeFoodItem(foodName: string) {
    this.foodMenuService.removeFoodItem(foodName);
    this.menu = this.foodMenuService.getMenu(); // Refresh the list
  }
}
