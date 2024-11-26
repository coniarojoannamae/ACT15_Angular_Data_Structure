import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';
import { GroceryItem } from './grocery-item.model.';
@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent {
  groceryList: { name: string; quantity: number; category: string }[] = [];
  newGroceryItem = { name: '', quantity: 0, category: '' };

  constructor(private groceryListService: GroceryListService) {
    this.groceryList = this.groceryListService.getGroceryList();
  }

  // Add a new grocery item
  addGroceryItem() {
    if (
      this.newGroceryItem.name.trim() &&
      this.newGroceryItem.quantity > 0 &&
      this.newGroceryItem.category.trim()
    ) {
      this.groceryListService.addGroceryItem({ ...this.newGroceryItem });
      this.newGroceryItem = { name: '', quantity: 0, category: '' }; // Reset the form
    } else {
      alert('Please enter valid details for the grocery item.');
    }
    this.groceryList = this.groceryListService.getGroceryList(); // Update the list
  }

  // Remove a grocery item by name
  removeGroceryItem(itemName: string) {
    this.groceryListService.removeGroceryItem(itemName);
    this.groceryList = this.groceryListService.getGroceryList(); // Update the list
  }
}
