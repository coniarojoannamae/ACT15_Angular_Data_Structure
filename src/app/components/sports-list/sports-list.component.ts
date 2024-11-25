import { Component, OnInit } from '@angular/core';
import { SportService } from './sports-list.service';
import { Sport } from './sport.model';
@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {
  sports: Sport[] = [];
  newSport: Sport = { name: '', type: '' };
  sportTypes: string[] = ['Team Sport', 'Individual Sport', 'Racing', 'Combat'];

  constructor(private sportService: SportService) {}

  ngOnInit() {
    this.sports = this.sportService.getSports(); // Fetch initial sports list
  }

  addSport() {
    if (this.newSport.name.trim() && this.newSport.type.trim()) {
      this.sportService.addSport({ ...this.newSport });
      this.sports = this.sportService.getSports(); // Refresh the list
      this.newSport = { name: '', type: '' }; // Reset the form
    }
  }

  removeSport(sportName: string) {
    this.sportService.removeSport(sportName);
    this.sports = this.sportService.getSports(); // Refresh the list
  }
}
