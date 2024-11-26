import { Component } from '@angular/core';
import { PaintingService } from './painting.service';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent {
  paintingList: { title: string, artist: string, year: number, style: string, location: string }[] = [];
  newPainting = { title: '', artist: '', year: 0, style: '', location: '' };

  constructor(private paintingService: PaintingService) {}

  ngOnInit() {
    this.paintingList = this.paintingService.getPaintings();
  }

  addPainting() {
    if (this.newPainting.title.trim() && this.newPainting.artist.trim() && this.newPainting.year > 0 && this.newPainting.style.trim() && this.newPainting.location.trim()) {
      this.paintingService.addPainting({ ...this.newPainting });
      this.newPainting = { title: '', artist: '', year: 0, style: '', location: '' }; // Reset the form
    } else {
      alert('Please fill in all the details for the painting.');
    }
    this.paintingList = this.paintingService.getPaintings(); // Refresh the list
  }

  removePainting(title: string) {
    this.paintingService.removePainting(title);
    this.paintingList = this.paintingService.getPaintings(); // Refresh the list
  }
}
