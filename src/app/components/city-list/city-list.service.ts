import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities = [
    { name: 'New York', country: 'USA' },
    { name: 'London', country: 'UK' },
  ];

  getCities() {
    return [...this.cities];
  }

  addCity(city: { name: string; country: string }) {
    this.cities.push(city);
  }

  removeCity(name: string) {
    this.cities = this.cities.filter(city => city.name !== name);
  }
}
