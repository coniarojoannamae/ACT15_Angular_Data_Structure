import { Component } from '@angular/core';
import {Fruit} from "./fruit.model";

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits: string[] = ['Apple', 'Banana', 'Orange'];

  newFruit: string = '';

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit.trim());
      this.newFruit = ''; // Reset input field after adding
    }
  }

  removeFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
