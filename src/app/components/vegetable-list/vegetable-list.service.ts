import { Injectable } from '@angular/core';

export interface Vegetable {
  name: string;
  pricePerKg: number;
}

@Injectable({
  providedIn: 'root',
})
export class VegetableService {
  private vegetables: Vegetable[] = [
    { name: 'Carrot', pricePerKg: 50 },
    { name: 'Potato', pricePerKg: 30 },
    { name: 'Tomato', pricePerKg: 40 },
  ];

  // Get the list of vegetables
  getVegetables(): Vegetable[] {
    return [...this.vegetables]; // Return a copy of the array
  }

  // Add a new vegetable
  addVegetable(vegetable: Vegetable): void {
    this.vegetables.push(vegetable);
  }

  // Remove a vegetable by name
  removeVegetable(name: string): void {
    this.vegetables = this.vegetables.filter(v => v.name !== name);
  }
}
