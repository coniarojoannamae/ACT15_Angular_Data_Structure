import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private fruits: string[] = ['Apple', 'Banana', 'Orange'];

  // Method to get the list of fruits
  getFruits(): string[] {
    return [...this.fruits]; // Return a copy to avoid direct mutations
  }

  // Method to add a fruit
  addFruit(fruit: string): void {
    if (fruit.trim()) {
      this.fruits.push(fruit.trim());
    }
  }

  // Method to remove a fruit
  removeFruit(fruit: string): void {
    this.fruits = this.fruits.filter((f) => f !== fruit);
  }
}
