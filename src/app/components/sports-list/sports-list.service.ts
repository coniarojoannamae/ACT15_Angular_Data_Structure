import { Injectable } from '@angular/core';

export interface Sport {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private sports: Sport[] = [
    { name: 'Soccer', type: 'Team Sport' },
    { name: 'Tennis', type: 'Individual Sport' },
    { name: 'Basketball', type: 'Team Sport' },
    { name: 'Swimming', type: 'Individual Sport' }
  ];

  // Retrieve all sports
  getSports(): Sport[] {
    return [...this.sports]; // Return a copy of the array
  }

  // Add a new sport
  addSport(sport: Sport): void {
    this.sports.push(sport);
  }

  // Remove a sport by name
  removeSport(name: string): void {
    this.sports = this.sports.filter(sport => sport.name !== name);
  }
}
