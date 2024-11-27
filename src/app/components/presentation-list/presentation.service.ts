import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  private presentationList: { topic: string; presenter: string; date: Date }[] = [
    { topic: 'Introduction to Angular', presenter: 'John Doe', date: new Date('2024-11-01') },
    { topic: 'Understanding TypeScript', presenter: 'Jane Smith', date: new Date('2024-11-05') },
  ];

  // Retrieve the list of presentations
  getPresentationList() {
    return this.presentationList;
  }

  // Add a new presentation to the list
  addPresentation(presentation: { topic: string; presenter: string; date: Date }) {
    this.presentationList.push(presentation);
  }

  // Remove a presentation by topic
  removePresentation(topic: string) {
    this.presentationList = this.presentationList.filter(presentation => presentation.topic !== topic);
  }
}
