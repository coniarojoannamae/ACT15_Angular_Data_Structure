import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecificationsService {
  private laptopList: { brand: string, model: string, processor: string, ram: string, storage: string, price: number }[] = [
    { brand: 'Apple', model: 'MacBook Pro', processor: 'M1', ram: '16GB', storage: '512GB SSD', price: 2400 },
    { brand: 'Dell', model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', price: 1500 },
    { brand: 'HP', model: 'Spectre x360', processor: 'Intel i7', ram: '16GB', storage: '1TB SSD', price: 1600 }
  ];

  // Retrieve the list of laptops
  getLaptops() {
    return this.laptopList;
  }

  // Add a new laptop to the list
  addLaptop(laptop: { brand: string, model: string, processor: string, ram: string, storage: string, price: number }) {
    this.laptopList.push(laptop);
  }

  // Remove a laptop by model
  removeLaptop(model: string) {
    this.laptopList = this.laptopList.filter(laptop => laptop.model !== model);
  }
}
