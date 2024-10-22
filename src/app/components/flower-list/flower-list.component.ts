import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
  // Initial list of flowers for the wedding
  flowerList: { flowerName: string, quantity: number, color: string }[] = [
    { flowerName: 'Lilies', quantity: 30, color: 'White' },
    { flowerName: 'Tulips', quantity: 20, color: 'Pink' }
  ];

  // Initialize new flower with default values
  newFlower = { flowerName: '', quantity: 0, color: '' };

  // Add a new flower to the list
  addFlower() {
    if (this.newFlower.flowerName.trim() && this.newFlower.quantity > 0 && this.newFlower.color.trim()) {
      this.flowerList.push({ ...this.newFlower });
      this.newFlower = { flowerName: '', quantity: 0, color: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the flower.');
    }
  }

  // Remove a flower by flowerName
  removeFlower(flowerName: string) {
    this.flowerList = this.flowerList.filter(flower => flower.flowerName !== flowerName);
  }
}
