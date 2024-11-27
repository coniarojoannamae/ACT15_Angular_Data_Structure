import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventList: { name: string; date: Date; location: string }[] = [
    { name: 'Concert in the Park', date: new Date('2024-11-15'), location: 'Central Park, NYC' },
    { name: 'Art Exhibition', date: new Date('2024-11-20'), location: 'Art Gallery, San Francisco' },
    { name: 'Tech Conference', date: new Date('2024-12-01'), location: 'Convention Center, Chicago' },
  ];

  // Retrieve the list of events
  getEventList() {
    return this.eventList;
  }

  // Add a new event
  addEvent(event: { name: string; date: Date; location: string }) {
    this.eventList.push(event);
  }

  // Remove an event by name
  removeEvent(name: string) {
    this.eventList = this.eventList.filter(event => event.name !== name);
  }
}
