import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: { name: string, description: string }[] = [
    { name: 'Computer Science', description: 'Study of computer systems and algorithms' },
    { name: 'Communication', description: 'emphasizes communication theory and practice in the creation, presentation, and evaluation of coherent messages.' },
    { name: 'Information Technology', description: 'Focus on computing technology and software development' },
  ];
  newCourse = { name: '', description: '' };

  addCourse() {
    if (this.newCourse.name.trim() && this.newCourse.description.trim()) {
      this.courses.push({ ...this.newCourse });
      this.newCourse = { name: '', description: '' }; // Reset the form fields
    }
  }

  removeCourse(courseName: string) {
    this.courses = this.courses.filter(course => course.name !== courseName);
  }
}
