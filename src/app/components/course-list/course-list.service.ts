import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: { name: string; description: string }[] = [
    { name: 'Computer Science', description: 'Study of computer systems and algorithms' },
    { name: 'Communication', description: 'Emphasizes communication theory and practice in the creation, presentation, and evaluation of coherent messages.' },
    { name: 'Information Technology', description: 'Focus on computing technology and software development' },
  ];

  // Get the list of courses
  getCourses() {
    return [...this.courses]; // Return a copy to avoid direct modification
  }

  // Add a new course
  addCourse(course: { name: string; description: string }) {
    this.courses.push(course);
  }

  // Remove a course by name
  removeCourse(courseName: string) {
    this.courses = this.courses.filter(course => course.name !== courseName);
  }
}
