import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  // Initial list of tour dates
  tourList: { date: Date; location: string; venue: string }[] = [
    { date: new Date('2024-11-15'), location: 'New York, NY', venue: 'Madison Square Garden' },
    { date: new Date('2024-11-20'), location: 'Los Angeles, CA', venue: 'Hollywood Bowl' },
    { date: new Date('2024-12-01'), location: 'Chicago, IL', venue: 'United Center' }
  ];

  // Initialize new tour date with default values
  newTour = { date: '', location: '', venue: '' };

  // Add a new tour date to the list
  addTour() {
    if (this.newTour.date && this.newTour.location.trim() && this.newTour.venue.trim()) {
      this.tourList.push({
        date: new Date(this.newTour.date),
        location: this.newTour.location,
        venue: this.newTour.venue
      });
      this.newTour = { date: '', location: '', venue: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  // Remove a tour date by date
  removeTour(date: Date) {
    this.tourList = this.tourList.filter(tour => tour.date !== date);
  }
}
