import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  // Initial list of furniture items
  furnitureList: { itemName: string, category: string, price: number, material: string, quantityAvailable: number }[] = [
    { itemName: 'Dining Table', category: 'Table', price: 8000, material: 'Wood', quantityAvailable: 5 },
    { itemName: 'Office Chair', category: 'Chair', price: 3000, material: 'Leather', quantityAvailable: 10 },
    { itemName: 'Sofa', category: 'Sofa', price: 12000, material: 'Fabric', quantityAvailable: 2 }
  ];

  // Initialize new furniture item with default values
  newFurniture = { itemName: '', category: '', price: 0, material: '', quantityAvailable: 0 };

  // Add a new furniture item to the list
  addFurniture() {
    if (this.newFurniture.itemName.trim() && this.newFurniture.category.trim() && this.newFurniture.material.trim() && this.newFurniture.price > 0 && this.newFurniture.quantityAvailable > 0) {
      this.furnitureList.push({ ...this.newFurniture });
      this.newFurniture = { itemName: '', category: '', price: 0, material: '', quantityAvailable: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the furniture item.');
    }
  }
  // Remove a furniture item by itemName
  removeFurniture(itemName: string) {
    this.furnitureList = this.furnitureList.filter(item => item.itemName !== itemName);
  }
}
