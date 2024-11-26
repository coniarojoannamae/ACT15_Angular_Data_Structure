import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artistList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [
    { name: 'Leonardo da Vinci', born: '1452', died: '1519', nationality: 'Italian', famousWorks: ['Mona Lisa', 'The Last Supper'] },
    { name: 'Vincent van Gogh', born: '1853', died: '1890', nationality: 'Dutch', famousWorks: ['Starry Night', 'Sunflowers'] },
    { name: 'Frida Kahlo', born: '1907', died: '1954', nationality: 'Mexican', famousWorks: ['The Two Fridas', 'Self-Portrait with Thorn Necklace'] }
  ];

  // Get the list of artists
  getArtists() {
    return this.artistList;
  }

  // Add a new artist to the list
  addArtist(artist: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }) {
    this.artistList.push(artist);
  }

  // Remove an artist by name
  removeArtist(name: string) {
    this.artistList = this.artistList.filter(artist => artist.name !== name);
  }
}
