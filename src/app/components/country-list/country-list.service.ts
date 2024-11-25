import { Injectable } from '@angular/core';

export interface Country {
  name: string;
  continent: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countries: Country[] = [
    { name: 'United States', continent: 'North America' },
    { name: 'Canada', continent: 'North America' },
    { name: 'Brazil', continent: 'South America' },
    { name: 'Germany', continent: 'Europe' },
    { name: 'China', continent: 'Asia' }
  ];

  // Retrieve all countries
  getCountries(): Country[] {
    return [...this.countries]; // Return a copy of the list
  }

  // Add a new country
  addCountry(country: Country): void {
    this.countries.push(country);
  }

  // Remove a country by name
  removeCountry(name: string): void {
    this.countries = this.countries.filter(country => country.name !== name);
  }

  // Filter countries by continent
  getCountriesByContinent(continent: string): Country[] {
    return this.countries.filter(country => country.continent === continent);
  }
}
