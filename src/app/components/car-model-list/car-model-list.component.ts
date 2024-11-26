import { Component } from '@angular/core';
import { CarModel } from './car.model';
import { CarModelService } from './car-model.service';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css'],
})
export class CarModelListComponent {
  carModels: { make: string; model: string; year: number }[] = [];
  newCarModel = { make: '', model: '', year: 0 }; // Initialize year with a default number

  constructor(private carModelService: CarModelService) {
    this.loadCarModels();
  }

  loadCarModels() {
    this.carModels = this.carModelService.getCarModels();
  }

  addCarModel() {
    if (this.newCarModel.make.trim() && this.newCarModel.model.trim() && this.newCarModel.year > 0) {
      this.carModelService.addCarModel({ ...this.newCarModel });
      this.newCarModel = { make: '', model: '', year: 0 }; // Reset the form
      this.loadCarModels();
    }
  }

  removeCarModel(modelName: string) {
    this.carModelService.removeCarModel(modelName);
    this.loadCarModels();
  }
}