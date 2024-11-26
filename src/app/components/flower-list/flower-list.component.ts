import { Component } from '@angular/core';
import { FlowerListService } from './flower-list.service';
import { Flower } from './flower.model';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css'],
})
export class FlowerListComponent {
  flowerList: { flowerName: string; quantity: number; color: string }[] = [];
  newFlower = { flowerName: '', quantity: 0, color: '' };

  constructor(private flowerService: FlowerListService) {
    this.flowerList = this.flowerService.getFlowers();
  }

  // Add a new flower
  addFlower() {
    if (
      this.newFlower.flowerName.trim() &&
      this.newFlower.quantity > 0 &&
      this.newFlower.color.trim()
    ) {
      this.flowerService.addFlower({ ...this.newFlower });
      this.newFlower = { flowerName: '', quantity: 0, color: '' }; // Reset form
      this.flowerList = this.flowerService.getFlowers(); // Refresh the list
    } else {
      alert('Please fill in all the details for the flower.');
    }
  }

  // Remove a flower
  removeFlower(flowerName: string) {
    this.flowerService.removeFlower(flowerName);
    this.flowerList = this.flowerService.getFlowers(); // Refresh the list
  }
}
