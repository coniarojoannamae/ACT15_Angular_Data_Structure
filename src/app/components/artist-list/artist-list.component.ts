import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  // Initial list of famous artists
  artistList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [
    { name: 'Leonardo da Vinci', born: '1452', died: '1519', nationality: 'Italian', famousWorks: ['Mona Lisa', 'The Last Supper'] },
    { name: 'Vincent van Gogh', born: '1853', died: '1890', nationality: 'Dutch', famousWorks: ['Starry Night', 'Sunflowers'] },
    { name: 'Frida Kahlo', born: '1907', died: '1954', nationality: 'Mexican', famousWorks: ['The Two Fridas', 'Self-Portrait with Thorn Necklace'] }
  ];

  // Initialize new artist with default values
  newArtist = { name: '', born: '', died: '', nationality: '', famousWorks: '' };

  // Add a new artist to the list
  addArtist() {
    const famousWorksArray = this.newArtist.famousWorks.split(',').map(work => work.trim());
    if (this.newArtist.name.trim() && this.newArtist.born.trim() && this.newArtist.nationality.trim()) {
      this.artistList.push({
        name: this.newArtist.name,
        born: this.newArtist.born,
        died: this.newArtist.died || 'N/A',  // Mark "N/A" if the artist is alive
        nationality: this.newArtist.nationality,
        famousWorks: famousWorksArray
      });
      this.newArtist = { name: '', born: '', died: '', nationality: '', famousWorks: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove an artist by name
  removeArtist(name: string) {
    this.artistList = this.artistList.filter(artist => artist.name !== name);
  }

}
