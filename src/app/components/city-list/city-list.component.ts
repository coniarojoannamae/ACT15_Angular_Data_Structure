import { Component } from '@angular/core';
import { City } from './city.model';
import { CityService } from './city-list.service';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  cities: { name: string; country: string }[] = [];
  newCity = { name: '', country: '' };

  constructor(private cityService: CityService) {
    this.loadCities();
  }

  loadCities() {
    this.cities = this.cityService.getCities();
  }

  addCity() {
    if (this.newCity.name.trim() && this.newCity.country.trim()) {
      this.cityService.addCity({ ...this.newCity });
      this.newCity = { name: '', country: '' }; // Reset the form fields
      this.loadCities();
    }
  }

  removeCity(name: string) {
    this.cityService.removeCity(name);
    this.loadCities();
  }
}
