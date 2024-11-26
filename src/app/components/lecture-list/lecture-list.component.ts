import { Component } from '@angular/core';
import { LectureListService } from './lecture-list.service';
import { Lecture } from './lecture.model';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css'],
})
export class LectureListComponent {
  lectures: { lectureName: string; date: string; time: string; topic: string }[] = [];
  newLecture = { lectureName: '', date: '', time: '', topic: '' };

  constructor(private lectureService: LectureListService) {
    this.lectures = this.lectureService.getLectures();
  }

  // Add a new lecture
  addLecture() {
    if (
      this.newLecture.lectureName.trim() &&
      this.newLecture.date &&
      this.newLecture.time.trim() &&
      this.newLecture.topic.trim()
    ) {
      this.lectureService.addLecture({ ...this.newLecture });
      this.newLecture = { lectureName: '', date: '', time: '', topic: '' }; // Reset the form
      this.lectures = this.lectureService.getLectures(); // Refresh the list
    } else {
      alert('Please fill in all the details for the lecture.');
    }
  }

  // Remove a lecture
  removeLecture(lectureName: string) {
    this.lectureService.removeLecture(lectureName);
    this.lectures = this.lectureService.getLectures(); // Refresh the list
  }
}
