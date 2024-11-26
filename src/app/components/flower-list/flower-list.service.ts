import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowerListService {
  private flowerList: { flowerName: string; quantity: number; color: string }[] = [
    { flowerName: 'Lilies', quantity: 30, color: 'White' },
    { flowerName: 'Tulips', quantity: 20, color: 'Pink' },
  ];

  // Get the list of flowers
  getFlowers() {
    return this.flowerList;
  }

  // Add a flower to the list
  addFlower(flower: { flowerName: string; quantity: number; color: string }) {
    this.flowerList.push(flower);
  }

  // Remove a flower from the list
  removeFlower(flowerName: string) {
    this.flowerList = this.flowerList.filter(flower => flower.flowerName !== flowerName);
  }
}
