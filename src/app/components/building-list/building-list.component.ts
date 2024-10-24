import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  // Initial list of buildings
  buildingList: { name: string, location: string, floors: number, buildingType: string, capacity: number }[] = [
    { name: 'Science Building', location: 'North Wing', floors: 5, buildingType: 'Academic', capacity: 1200 },
    { name: 'Admin Building', location: 'Main Campus', floors: 3, buildingType: 'Administrative', capacity: 500 },
    { name: 'Dormitory A', location: 'South Campus', floors: 7, buildingType: 'Dormitory', capacity: 800 }
  ];

  // Initialize new building with default values
  newBuilding = { name: '', location: '', floors: 0, buildingType: '', capacity: 0 };

  // Add a new building to the list
  addBuilding() {
    if (this.newBuilding.name.trim() && this.newBuilding.location.trim() && this.newBuilding.buildingType.trim() && this.newBuilding.floors > 0 && this.newBuilding.capacity > 0) {
      this.buildingList.push({ ...this.newBuilding });
      this.newBuilding = { name: '', location: '', floors: 0, buildingType: '', capacity: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the building.');
    }
  }

  // Remove a building by name
  removeBuilding(name: string) {
    this.buildingList = this.buildingList.filter(building => building.name !== name);
  }
}
