import { Component, OnInit } from '@angular/core';
import { PresentationService } from './presentation.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent implements OnInit {
  presentationList: { topic: string; presenter: string; date: Date }[] = [];
  newPresentation = { topic: '', presenter: '', date: '' };

  constructor(private presentationService: PresentationService) {}

  ngOnInit() {
    this.presentationList = this.presentationService.getPresentationList();
  }

  addPresentation() {
    if (this.newPresentation.topic.trim() && this.newPresentation.presenter.trim() && this.newPresentation.date) {
      this.presentationService.addPresentation({
        topic: this.newPresentation.topic,
        presenter: this.newPresentation.presenter,
        date: new Date(this.newPresentation.date)
      });
      this.newPresentation = { topic: '', presenter: '', date: '' }; // Reset the form
      this.presentationList = this.presentationService.getPresentationList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removePresentation(topic: string) {
    this.presentationService.removePresentation(topic);
    this.presentationList = this.presentationService.getPresentationList(); // Refresh the list
  }
}
