import { Component, OnInit } from '@angular/core';
import { VegetableService } from './vegetable-list.service';
import { Vegetable } from './vegetable.model';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  vegetables: Vegetable[] = [];
  newVegetable: Vegetable = { name: '', pricePerKg: 0 };

  constructor(private vegetableService: VegetableService) {}

  ngOnInit() {
    this.vegetables = this.vegetableService.getVegetables(); // Fetch initial list
  }

  addVegetable() {
    if (this.newVegetable.name.trim() && this.newVegetable.pricePerKg > 0) {
      this.vegetableService.addVegetable({ ...this.newVegetable });
      this.vegetables = this.vegetableService.getVegetables(); // Refresh list
      this.newVegetable = { name: '', pricePerKg: 0 }; // Reset form
    } else {
      alert('Please enter a valid name and price for the vegetable.');
    }
  }

  removeVegetable(name: string) {
    this.vegetableService.removeVegetable(name);
    this.vegetables = this.vegetableService.getVegetables(); // Refresh list
  }
}
