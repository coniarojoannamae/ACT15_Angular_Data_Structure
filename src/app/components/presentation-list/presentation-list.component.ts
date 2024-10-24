import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
// Initial list of presentation topics
  presentationList: { topic: string; presenter: string; date: Date }[] = [
    { topic: 'Introduction to Angular', presenter: 'John Doe', date: new Date('2024-11-01') },
    { topic: 'Understanding TypeScript', presenter: 'Jane Smith', date: new Date('2024-11-05') },
  ];

  // Initialize new presentation with default values
  newPresentation = { topic: '', presenter: '', date: '' };

  // Add a new presentation topic to the list
  addPresentation() {
    if (this.newPresentation.topic.trim() && this.newPresentation.presenter.trim() && this.newPresentation.date) {
      this.presentationList.push({
        topic: this.newPresentation.topic,
        presenter: this.newPresentation.presenter,
        date: new Date(this.newPresentation.date)
      });
      this.newPresentation = { topic: '', presenter: '', date: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a presentation topic by topic name
  removePresentation(topic: string) {
    this.presentationList = this.presentationList.filter(presentation => presentation.topic !== topic);
  }
}
