import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaintingService {
  private paintingList: { title: string, artist: string, year: number, style: string, location: string }[] = [
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503, style: 'Renaissance', location: 'Louvre, Paris' },
    { title: 'Starry Night', artist: 'Vincent van Gogh', year: 1889, style: 'Post-Impressionism', location: 'MoMA, New York' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931, style: 'Surrealism', location: 'MoMA, New York' }
  ];

  // Get the list of paintings
  getPaintings() {
    return this.paintingList;
  }

  // Add a new painting to the list
  addPainting(painting: { title: string, artist: string, year: number, style: string, location: string }) {
    this.paintingList.push(painting);
  }

  // Remove a painting by title
  removePainting(title: string) {
    this.paintingList = this.paintingList.filter(painting => painting.title !== title);
  }
}
