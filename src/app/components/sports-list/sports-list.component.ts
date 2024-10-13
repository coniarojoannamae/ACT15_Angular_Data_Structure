import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
// Initial list of popular sports
  sports: { name: string, type: string }[] = [
    { name: 'Soccer', type: 'Team Sport' },
    { name: 'Tennis', type: 'Individual Sport' },
    { name: 'Basketball', type: 'Team Sport' },
    { name: 'Swimming', type: 'Individual Sport' }
  ];

  // Initialize new sport
  newSport = { name: '', type: '' };

  // Add a new sport
  addSport() {
    if (this.newSport.name.trim() && this.newSport.type.trim()) {
      this.sports.push({ ...this.newSport });
      this.newSport = { name: '', type: '' }; // Reset form
    }
  }

  // Remove a sport by name
  removeSport(sportName: string) {
    this.sports = this.sports.filter(sport => sport.name !== sportName);
  }
}
