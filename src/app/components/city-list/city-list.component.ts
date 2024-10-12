import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: { name: string, country: string }[] = [
    { name: 'New York', country: 'USA' },
    { name: 'London', country: 'UK' },
  ];

  newCity = { name: '', country: '' };

  addCity() {
    if (this.newCity.name.trim() && this.newCity.country.trim()) {
      this.cities.push({ ...this.newCity });
      this.newCity = { name: '', country: '' }; // Reset the form
    }
  }

  removeCity(cityName: string) {
    this.cities = this.cities.filter(city => city.name !== cityName);
  }
}
