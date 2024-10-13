import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList: { name: string, quantity: number, category: string }[] = [
    { name: 'Apples', quantity: 5, category: 'Fruits' },
    { name: 'Milk', quantity: 2, category: 'Dairy' },
    { name: 'Carrots', quantity: 1, category: 'Vegetables' }
  ];
  newGroceryItem = { name: '', quantity: 0, category: '' };
  addGroceryItem() {
    if (this.newGroceryItem.name.trim() && this.newGroceryItem.quantity > 0 && this.newGroceryItem.category.trim()) {
      this.groceryList.push({ ...this.newGroceryItem });
      this.newGroceryItem = { name: '', quantity: 0, category: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the grocery item.');
    }
  }
  removeGroceryItem(itemName: string) {
    this.groceryList = this.groceryList.filter(item => item.name !== itemName);
  }
}
