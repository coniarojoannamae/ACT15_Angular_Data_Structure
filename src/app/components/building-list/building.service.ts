import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  private buildingList: { name: string, location: string, floors: number, buildingType: string, capacity: number }[] = [
    { name: 'Science Building', location: 'North Wing', floors: 5, buildingType: 'Academic', capacity: 1200 },
    { name: 'Admin Building', location: 'Main Campus', floors: 3, buildingType: 'Administrative', capacity: 500 },
    { name: 'Dormitory A', location: 'South Campus', floors: 7, buildingType: 'Dormitory', capacity: 800 }
  ];

  // Get the list of buildings
  getBuildings() {
    return this.buildingList;
  }

  // Add a new building to the list
  addBuilding(building: { name: string, location: string, floors: number, buildingType: string, capacity: number }) {
    this.buildingList.push(building);
  }

  // Remove a building by name
  removeBuilding(name: string) {
    this.buildingList = this.buildingList.filter(building => building.name !== name);
  }
}
