import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  private carModels = [
    { make: 'Toyota', model: 'Camry', year: 2021 },
    { make: 'Honda', model: 'Civic', year: 2020 },
  ];

  getCarModels() {
    return [...this.carModels]; // Return a copy of the car models
  }

  addCarModel(car: { make: string; model: string; year: number }) {
    this.carModels.push(car);
  }

  removeCarModel(modelName: string) {
    this.carModels = this.carModels.filter(car => car.model !== modelName);
  }
}
