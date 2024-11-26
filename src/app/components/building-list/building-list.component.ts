import { Component } from '@angular/core';
import { BuildingService } from './building.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent {
  buildingList: { name: string, location: string, floors: number, buildingType: string, capacity: number }[] = [];
  newBuilding = { name: '', location: '', floors: 0, buildingType: '', capacity: 0 };

  constructor(private buildingService: BuildingService) {}

  ngOnInit() {
    this.buildingList = this.buildingService.getBuildings();
  }

  addBuilding() {
    if (this.newBuilding.name.trim() && this.newBuilding.location.trim() && this.newBuilding.buildingType.trim() && this.newBuilding.floors > 0 && this.newBuilding.capacity > 0) {
      this.buildingService.addBuilding({ ...this.newBuilding });
      this.newBuilding = { name: '', location: '', floors: 0, buildingType: '', capacity: 0 }; // Reset form
    } else {
      alert('Please fill in all the details for the building.');
    }
  }

  removeBuilding(name: string) {
    this.buildingService.removeBuilding(name);
    this.buildingList = this.buildingService.getBuildings();
  }
}
