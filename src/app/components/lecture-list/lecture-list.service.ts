import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LectureListService {
  private lectures: { lectureName: string; date: string; time: string; topic: string }[] = [
    { lectureName: 'Intro to Angular', date: '2024-10-12', time: '10:00 AM', topic: 'Basics of Angular' },
    { lectureName: 'Advanced Angular', date: '2024-10-13', time: '2:00 PM', topic: 'Component Interaction' },
  ];

  // Get the list of lectures
  getLectures() {
    return this.lectures;
  }

  // Add a new lecture
  addLecture(lecture: { lectureName: string; date: string; time: string; topic: string }) {
    this.lectures.push(lecture);
  }

  // Remove a lecture by name
  removeLecture(lectureName: string) {
    this.lectures = this.lectures.filter(lecture => lecture.lectureName !== lectureName);
  }
}
