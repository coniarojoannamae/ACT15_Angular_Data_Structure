import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  // Initial list of vegetables
  vegetables: { name: string, pricePerKg: number }[] = [
    { name: 'Carrot', pricePerKg: 50 },
    { name: 'Potato', pricePerKg: 30 },
    { name: 'Tomato', pricePerKg: 40 },
  ];

  // Initialize new vegetable with a valid default price
  newVegetable = { name: '', pricePerKg: 0 };

  // Add a new vegetable with validation
  addVegetable() {
    if (this.newVegetable.name.trim() && this.newVegetable.pricePerKg > 0) {
      this.vegetables.push({ ...this.newVegetable });
      this.newVegetable = { name: '', pricePerKg: 0 };  // Reset form after adding
    } else {
      alert('Please enter a valid name and price for the vegetable.');
    }
  }

  // Remove a vegetable by name
  removeVegetable(vegetableName: string) {
    this.vegetables = this.vegetables.filter(vegetable => vegetable.name !== vegetableName);
  }
}
