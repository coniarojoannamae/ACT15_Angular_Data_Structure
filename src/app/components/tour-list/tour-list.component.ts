import { Component, OnInit } from '@angular/core';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tourList: { date: Date; location: string; venue: string }[] = [];
  newTour = { date: '', location: '', venue: '' };

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tourList = this.tourService.getTourList();
  }

  addTour() {
    if (this.newTour.date && this.newTour.location.trim() && this.newTour.venue.trim()) {
      this.tourService.addTour({
        date: new Date(this.newTour.date),
        location: this.newTour.location,
        venue: this.newTour.venue
      });
      this.newTour = { date: '', location: '', venue: '' }; // Reset the form
      this.tourList = this.tourService.getTourList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeTour(date: Date) {
    this.tourService.removeTour(date);
    this.tourList = this.tourService.getTourList(); // Refresh the list
  }
}
