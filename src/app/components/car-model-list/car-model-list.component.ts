import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent {
  carModels: { make: string, model: string, year: number }[] = [
    { make: 'Toyota', model: 'Camry', year: 2021 },
    { make: 'Honda', model: 'Civic', year: 2020 },
  ];

  newCarModel = { make: '', model: '', year: 0 }; // Initialize year with a default number

  addCarModel() {
    if (this.newCarModel.make.trim() && this.newCarModel.model.trim() && this.newCarModel.year) {
      this.carModels.push({ ...this.newCarModel });
      this.newCarModel = { make: '', model: '', year: 0 }; // Reset the form with 0 for year
    }
  }
  removeCarModel(carModelName: string) {
    this.carModels = this.carModels.filter(car => car.model !== carModelName);
  }
}
