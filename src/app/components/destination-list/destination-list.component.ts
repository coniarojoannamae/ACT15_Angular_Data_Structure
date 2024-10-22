import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  // Initial list of travel destinations
  destinationList: { destinationName: string, country: string, attractions: string }[] = [
    { destinationName: 'Paris', country: 'France', attractions: 'Eiffel Tower, Louvre Museum' },
    { destinationName: 'Kyoto', country: 'Japan', attractions: 'Fushimi Inari Shrine, Bamboo Forest' },
    { destinationName: 'Rome', country: 'Italy', attractions: 'Colosseum, Vatican City' }
  ];

  // Initialize new destination with default values
  newDestination = { destinationName: '', country: '', attractions: '' };

  // Add a new destination to the list
  addDestination() {
    if (this.newDestination.destinationName.trim() && this.newDestination.country.trim() && this.newDestination.attractions.trim()) {
      this.destinationList.push({ ...this.newDestination });
      this.newDestination = { destinationName: '', country: '', attractions: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the destination.');
    }
  }

  // Remove a destination by destinationName
  removeDestination(destinationName: string) {
    this.destinationList = this.destinationList.filter(destination => destination.destinationName !== destinationName);
  }
}
