import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryList: { itemName: string, quantity: number, price: number, category: string }[] = [
    { itemName: 'Laptop', quantity: 10, price: 50000, category: 'Electronics' },
    { itemName: 'Rice', quantity: 200, price: 40, category: 'Groceries' },
  ];
  newInventoryItem = { itemName: '', quantity: 0, price: 0, category: '' };

  addInventoryItem() {
    if (this.newInventoryItem.itemName.trim() && this.newInventoryItem.quantity > 0 && this.newInventoryItem.price > 0 && this.newInventoryItem.category.trim()) {
      this.inventoryList.push({ ...this.newInventoryItem });
      this.newInventoryItem = { itemName: '', quantity: 0, price: 0, category: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the inventory item.');
    }
  }
  removeInventoryItem(itemName: string) {
    this.inventoryList = this.inventoryList.filter(item => item.itemName !== itemName);
  }
}
