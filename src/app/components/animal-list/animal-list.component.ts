import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal-list.service';
import { Animal  } from './animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: { name: string, species: string, age: number }[] = [];
  newAnimal = { name: '', species: '', age: 0 };

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animals = this.animalService.getAnimals(); // Fetch the animal list from the service
  }

  // Add a new animal
  addAnimal() {
    if (this.newAnimal.name.trim() && this.newAnimal.species.trim() && this.newAnimal.age > 0) {
      this.animalService.addAnimal({ ...this.newAnimal }); // Use service to add
      this.newAnimal = { name: '', species: '', age: 0 }; // Reset the form
    } else {
      alert('Please enter valid details for the animal.');
    }
  }

  // Remove an animal by name
  removeAnimal(animalName: string) {
    this.animalService.removeAnimal(animalName); // Use service to remove
    this.animals = this.animalService.getAnimals(); // Refresh the list
  }
}
