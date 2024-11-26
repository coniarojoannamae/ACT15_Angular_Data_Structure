import { Component } from '@angular/core';
import { FurnitureService } from './furniture.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent {
  furnitureList: { itemName: string, category: string, price: number, material: string, quantityAvailable: number }[] = [];
  newFurniture = { itemName: '', category: '', price: 0, material: '', quantityAvailable: 0 };

  constructor(private furnitureService: FurnitureService) {
    this.furnitureList = this.furnitureService.getFurnitureList(); // Load data from the service
  }

  addFurniture() {
    if (
      this.newFurniture.itemName.trim() &&
      this.newFurniture.category.trim() &&
      this.newFurniture.material.trim() &&
      this.newFurniture.price > 0 &&
      this.newFurniture.quantityAvailable > 0
    ) {
      this.furnitureService.addFurniture({ ...this.newFurniture });
      this.newFurniture = { itemName: '', category: '', price: 0, material: '', quantityAvailable: 0 }; // Reset the form
      this.furnitureList = this.furnitureService.getFurnitureList(); // Refresh the list
    } else {
      alert('Please fill in all the details for the furniture item.');
    }
  }

  removeFurniture(itemName: string) {
    this.furnitureService.removeFurniture(itemName);
    this.furnitureList = this.furnitureService.getFurnitureList(); // Refresh the list
  }
}
