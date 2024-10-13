import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: { name: string, species: string, age: number }[] = [
    { name: 'Leo', species: 'Lion', age: 5 },
    { name: 'Dumbo', species: 'Elephant', age: 10 },
    { name: 'Zara', species: 'Zebra', age: 4 },
    { name: 'Sammy', species: 'Giraffe', age: 7 }
  ];

  // Initialize new animal with a valid default age
  newAnimal = { name: '', species: '', age: 0 };

  // Add a new animal
  addAnimal() {
    if (this.newAnimal.name.trim() && this.newAnimal.species.trim() && this.newAnimal.age > 0) {
      this.animals.push({ ...this.newAnimal });
      this.newAnimal = { name: '', species: '', age: 0 };  // Reset the form
    } else {
      alert('Please enter valid details for the animal.');
    }
  }

  // Remove an animal by name
  removeAnimal(animalName: string) {
    this.animals = this.animals.filter(animal => animal.name !== animalName);
  }
}
