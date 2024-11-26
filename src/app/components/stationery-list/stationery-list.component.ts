import { Component } from '@angular/core';
import { StationeryListService } from './stationery-list.service';
import { StationeryItem } from './stationery-item.model';
@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css'],
})
export class StationeryListComponent {
  stationeryList: { itemName: string; quantity: number; category: string }[] = [];
  newStationeryItem = { itemName: '', quantity: 0, category: '' };

  constructor(private stationeryService: StationeryListService) {
    this.stationeryList = this.stationeryService.getStationeryList();
  }

  // Add a new stationery item
  addStationeryItem() {
    if (
      this.newStationeryItem.itemName.trim() &&
      this.newStationeryItem.quantity > 0 &&
      this.newStationeryItem.category.trim()
    ) {
      this.stationeryService.addStationeryItem({ ...this.newStationeryItem });
      this.newStationeryItem = { itemName: '', quantity: 0, category: '' }; // Reset the form
      this.stationeryList = this.stationeryService.getStationeryList(); // Refresh the list
    } else {
      alert('Please enter valid details for the stationery item.');
    }
  }

  // Remove a stationery item
  removeStationeryItem(itemName: string) {
    this.stationeryService.removeStationeryItem(itemName);
    this.stationeryList = this.stationeryService.getStationeryList(); // Refresh the list
  }
}
