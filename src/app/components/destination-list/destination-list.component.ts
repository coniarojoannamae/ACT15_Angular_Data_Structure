import { Component } from '@angular/core';
import { DestinationService } from './destination.service';
import { Destination } from './destination.model';
@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  destinationList: { destinationName: string, country: string, attractions: string }[] = [];
  newDestination = { destinationName: '', country: '', attractions: '' };

  constructor(private destinationService: DestinationService) {
    this.destinationList = this.destinationService.getDestinations();
  }

  addDestination() {
    if (this.newDestination.destinationName.trim() && this.newDestination.country.trim() && this.newDestination.attractions.trim()) {
      this.destinationService.addDestination({ ...this.newDestination });
      this.newDestination = { destinationName: '', country: '', attractions: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the destination.');
    }
  }

  removeDestination(destinationName: string) {
    this.destinationService.removeDestination(destinationName);
    this.destinationList = this.destinationService.getDestinations(); // Refresh the list
  }
}
