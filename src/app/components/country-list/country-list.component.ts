import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  // Predefined list of countries
  countries: { name: string, continent: string }[] = [
    { name: 'United States', continent: 'North America' },
    { name: 'Canada', continent: 'North America' },
    { name: 'Brazil', continent: 'South America' },
    { name: 'Germany', continent: 'Europe' },
    { name: 'China', continent: 'Asia' }
  ];

  // Initialize new country
  newCountry = { name: '', continent: '' };

  // Add a new country
  addCountry() {
    if (this.newCountry.name.trim() && this.newCountry.continent.trim()) {
      this.countries.push({ ...this.newCountry });
      this.newCountry = { name: '', continent: '' }; // Reset the form
    }
  }

  // Remove a country by name
  removeCountry(countryName: string) {
    this.countries = this.countries.filter(country => country.name !== countryName);
  }

  // Get countries filtered by continent
  getCountriesByContinent(continent: string) {
    return this.countries.filter(country => country.continent === continent);
  }
}
