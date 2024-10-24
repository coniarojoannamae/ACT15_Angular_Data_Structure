import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  // Initial list of upcoming events
  eventList: { name: string; date: Date; location: string }[] = [
    { name: 'Concert in the Park', date: new Date('2024-11-15'), location: 'Central Park, NYC' },
    { name: 'Art Exhibition', date: new Date('2024-11-20'), location: 'Art Gallery, San Francisco' },
    { name: 'Tech Conference', date: new Date('2024-12-01'), location: 'Convention Center, Chicago' }
  ];

  // Initialize new event with default values
  newEvent = { name: '', date: '', location: '' };

  // Add a new event to the list
  addEvent() {
    if (this.newEvent.name.trim() && this.newEvent.date && this.newEvent.location.trim()) {
      this.eventList.push({
        name: this.newEvent.name,
        date: new Date(this.newEvent.date),
        location: this.newEvent.location
      });
      this.newEvent = { name: '', date: '', location: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove an event by name
  removeEvent(name: string) {
    this.eventList = this.eventList.filter(event => event.name !== name);
  }
}
