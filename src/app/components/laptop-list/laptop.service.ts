import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private laptopList: { brand: string, model: string, price: number }[] = [
    { brand: 'Dell', model: 'XPS 13', price: 1500 },
    { brand: 'HP', model: 'Spectre x360', price: 1300 }
  ];

  // Get the list of laptops
  getLaptops() {
    return this.laptopList;
  }

  // Add a new laptop
  addLaptop(laptop: { brand: string, model: string, price: number }) {
    this.laptopList.push(laptop);
  }

  // Remove a laptop by model
  removeLaptop(model: string) {
    this.laptopList = this.laptopList.filter(laptop => laptop.model !== model);
  }
}
