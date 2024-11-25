import { Component, OnInit } from '@angular/core';
import { CountryService } from './country-list.service';
import { Country } from './country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  newCountry: Country = { name: '', continent: '' };
  continents: string[] = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countries = this.countryService.getCountries(); // Fetch initial list of countries
  }

  addCountry() {
    if (this.newCountry.name.trim() && this.newCountry.continent.trim()) {
      this.countryService.addCountry({ ...this.newCountry });
      this.countries = this.countryService.getCountries(); // Refresh the list
      this.newCountry = { name: '', continent: '' }; // Reset the form
    }
  }

  removeCountry(countryName: string) {
    this.countryService.removeCountry(countryName);
    this.countries = this.countryService.getCountries(); // Refresh the list
  }

  getCountriesByContinent(continent: string): Country[] {
    return this.countryService.getCountriesByContinent(continent);
  }
}
