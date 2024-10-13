import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectures: { lectureName: string, date: string, time: string, topic: string }[] = [
    { lectureName: 'Intro to Angular', date: '2024-10-12', time: '10:00 AM', topic: 'Basics of Angular' },
    { lectureName: 'Advanced Angular', date: '2024-10-13', time: '2:00 PM', topic: 'Component Interaction' },
  ];
  newLecture = { lectureName: '', date: '', time: '', topic: '' };

  addLecture() {
    if (this.newLecture.lectureName.trim() && this.newLecture.date && this.newLecture.time.trim() && this.newLecture.topic.trim()) {
      this.lectures.push({ ...this.newLecture });
      this.newLecture = { lectureName: '', date: '', time: '', topic: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the lecture.');
    }
  }
  removeLecture(lectureName: string) {
    this.lectures = this.lectures.filter(lecture => lecture.lectureName !== lectureName);
  }
}
