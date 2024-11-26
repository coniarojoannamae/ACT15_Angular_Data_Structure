import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StationeryListService {
  private stationeryList: { itemName: string; quantity: number; category: string }[] = [
    { itemName: 'Pen', quantity: 100, category: 'Writing' },
    { itemName: 'Notebook', quantity: 50, category: 'Paper' },
    { itemName: 'Stapler', quantity: 20, category: 'Office Supplies' },
  ];

  // Retrieve all stationery items
  getStationeryList() {
    return this.stationeryList;
  }

  // Add a new stationery item
  addStationeryItem(item: { itemName: string; quantity: number; category: string }) {
    this.stationeryList.push(item);
  }

  // Remove a stationery item by name
  removeStationeryItem(itemName: string) {
    this.stationeryList = this.stationeryList.filter(item => item.itemName !== itemName);
  }
}
