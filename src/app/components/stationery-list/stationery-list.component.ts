import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryList: { itemName: string, quantity: number, category: string }[] = [
    { itemName: 'Pen', quantity: 100, category: 'Writing' },
    { itemName: 'Notebook', quantity: 50, category: 'Paper' },
    { itemName: 'Stapler', quantity: 20, category: 'Office Supplies' }
  ];

  newStationeryItem = { itemName: '', quantity: 0, category: '' };

  addStationeryItem() {
    if (this.newStationeryItem.itemName.trim() && this.newStationeryItem.quantity > 0 && this.newStationeryItem.category.trim()) {
      this.stationeryList.push({ ...this.newStationeryItem });
      this.newStationeryItem = { itemName: '', quantity: 0, category: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the stationery item.');
    }
  }
  removeStationeryItem(itemName: string) {
    this.stationeryList = this.stationeryList.filter(item => item.itemName !== itemName);
  }
}
