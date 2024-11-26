import { Component } from '@angular/core';
import { InventoryListService } from './inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent {
  inventoryList: { itemName: string; quantity: number; price: number; category: string }[] = [];
  newInventoryItem = { itemName: '', quantity: 0, price: 0, category: '' };

  constructor(private inventoryService: InventoryListService) {
    this.inventoryList = this.inventoryService.getInventoryList();
  }

  // Add a new inventory item
  addInventoryItem() {
    if (
      this.newInventoryItem.itemName.trim() &&
      this.newInventoryItem.quantity > 0 &&
      this.newInventoryItem.price > 0 &&
      this.newInventoryItem.category.trim()
    ) {
      this.inventoryService.addItem({ ...this.newInventoryItem });
      this.newInventoryItem = { itemName: '', quantity: 0, price: 0, category: '' }; // Reset the form
    } else {
      alert('Please enter valid details for the inventory item.');
    }
    this.inventoryList = this.inventoryService.getInventoryList(); // Refresh the list
  }

  // Remove an inventory item
  removeInventoryItem(itemName: string) {
    this.inventoryService.removeItem(itemName);
    this.inventoryList = this.inventoryService.getInventoryList(); // Refresh the list
  }
}
