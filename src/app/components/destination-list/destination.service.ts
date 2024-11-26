import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinationList: { destinationName: string, country: string, attractions: string }[] = [
    { destinationName: 'Paris', country: 'France', attractions: 'Eiffel Tower, Louvre Museum' },
    { destinationName: 'Kyoto', country: 'Japan', attractions: 'Fushimi Inari Shrine, Bamboo Forest' },
    { destinationName: 'Rome', country: 'Italy', attractions: 'Colosseum, Vatican City' }
  ];

  getDestinations() {
    return this.destinationList;
  }

  addDestination(destination: { destinationName: string, country: string, attractions: string }) {
    this.destinationList.push(destination);
  }

  removeDestination(destinationName: string) {
    this.destinationList = this.destinationList.filter(destination => destination.destinationName !== destinationName);
  }
}
