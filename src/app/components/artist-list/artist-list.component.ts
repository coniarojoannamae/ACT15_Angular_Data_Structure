import { Component } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  artistList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [];
  newArtist = { name: '', born: '', died: '', nationality: '', famousWorks: '' };

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistList = this.artistService.getArtists();
  }

  addArtist() {
    const famousWorksArray = this.newArtist.famousWorks.split(',').map(work => work.trim());
    if (this.newArtist.name.trim() && this.newArtist.born.trim() && this.newArtist.nationality.trim()) {
      this.artistService.addArtist({
        name: this.newArtist.name,
        born: this.newArtist.born,
        died: this.newArtist.died || 'N/A', // Default to 'N/A' if no death year provided
        nationality: this.newArtist.nationality,
        famousWorks: famousWorksArray
      });
      this.newArtist = { name: '', born: '', died: '', nationality: '', famousWorks: '' }; // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
    this.artistList = this.artistService.getArtists(); // Refresh the list
  }

  removeArtist(name: string) {
    this.artistService.removeArtist(name);
    this.artistList = this.artistService.getArtists(); // Refresh the list
  }
}
