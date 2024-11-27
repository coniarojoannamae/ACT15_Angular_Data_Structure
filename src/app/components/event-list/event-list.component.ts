import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  eventList: { name: string; date: Date; location: string }[] = [];
  newEvent = { name: '', date: '', location: '' };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }

  addEvent() {
    if (this.newEvent.name.trim() && this.newEvent.date && this.newEvent.location.trim()) {
      this.eventService.addEvent({
        name: this.newEvent.name,
        date: new Date(this.newEvent.date),
        location: this.newEvent.location,
      });
      this.newEvent = { name: '', date: '', location: '' }; // Reset the form
      this.eventList = this.eventService.getEventList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeEvent(name: string) {
    this.eventService.removeEvent(name);
    this.eventList = this.eventService.getEventList(); // Refresh the list
  }
}
