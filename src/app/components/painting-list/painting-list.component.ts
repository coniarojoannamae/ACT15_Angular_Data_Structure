import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  // Initial list of famous paintings
  paintingList: { title: string, artist: string, year: number, style: string, location: string }[] = [
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503, style: 'Renaissance', location: 'Louvre, Paris' },
    { title: 'Starry Night', artist: 'Vincent van Gogh', year: 1889, style: 'Post-Impressionism', location: 'MoMA, New York' },
    { title: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931, style: 'Surrealism', location: 'MoMA, New York' }
  ];

  // Initialize new painting with default values
  newPainting = { title: '', artist: '', year: 0, style: '', location: '' };

  // Add a new painting to the list
  addPainting() {
    if (this.newPainting.title.trim() && this.newPainting.artist.trim() && this.newPainting.year > 0 && this.newPainting.style.trim() && this.newPainting.location.trim()) {
      this.paintingList.push({ ...this.newPainting });
      this.newPainting = { title: '', artist: '', year: 0, style: '', location: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the painting.');
    }
  }

  // Remove a painting by title
  removePainting(title: string) {
    this.paintingList = this.paintingList.filter(painting => painting.title !== title);
  }
}
