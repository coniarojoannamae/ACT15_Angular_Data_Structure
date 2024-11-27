import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tourList: { date: Date; location: string; venue: string }[] = [
    { date: new Date('2024-11-15'), location: 'New York, NY', venue: 'Madison Square Garden' },
    { date: new Date('2024-11-20'), location: 'Los Angeles, CA', venue: 'Hollywood Bowl' },
    { date: new Date('2024-12-01'), location: 'Chicago, IL', venue: 'United Center' },
  ];

  // Get the list of tours
  getTourList() {
    return this.tourList;
  }

  // Add a new tour to the list
  addTour(tour: { date: Date; location: string; venue: string }) {
    this.tourList.push(tour);
  }

  // Remove a tour by date
  removeTour(date: Date) {
    this.tourList = this.tourList.filter(tour => tour.date.getTime() !== date.getTime());
  }
}
