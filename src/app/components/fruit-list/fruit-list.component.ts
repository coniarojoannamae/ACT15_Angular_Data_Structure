import { Component } from '@angular/core';
import { Fruit } from './fruit.model';
import { FruitService } from './fruit-list.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent {
  fruits: string[] = [];
  newFruit: string = '';

  constructor(private fruitService: FruitService) {
    this.loadFruits();
  }

  // Load fruits from the service
  loadFruits(): void {
    this.fruits = this.fruitService.getFruits();
  }

  // Add a new fruit
  addFruit(): void {
    this.fruitService.addFruit(this.newFruit);
    this.newFruit = ''; // Reset input field
    this.loadFruits(); // Refresh the fruit list
  }

  // Remove a fruit
  removeFruit(fruit: string): void {
    this.fruitService.removeFruit(fruit);
    this.loadFruits(); // Refresh the fruit list
  }
}
