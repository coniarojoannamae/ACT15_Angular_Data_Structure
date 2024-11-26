import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animals: { name: string, species: string, age: number }[] = [
    { name: 'Leo', species: 'Lion', age: 5 },
    { name: 'Dumbo', species: 'Elephant', age: 10 },
    { name: 'Zara', species: 'Zebra', age: 4 },
    { name: 'Sammy', species: 'Giraffe', age: 7 }
  ];

  // Fetch all animals
  getAnimals() {
    return this.animals;
  }

  // Add a new animal
  addAnimal(animal: { name: string, species: string, age: number }) {
    this.animals.push(animal);
  }

  // Remove an animal by name
  removeAnimal(animalName: string) {
    this.animals = this.animals.filter(animal => animal.name !== animalName);
  }
}
