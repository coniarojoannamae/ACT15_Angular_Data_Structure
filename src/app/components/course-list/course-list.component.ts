import { Component } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: { name: string; description: string }[] = [];
  newCourse = { name: '', description: '' };

  constructor(private courseService: CourseService) {
    this.loadCourses();
  }

  // Load courses from the service
  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

  // Add a new course
  addCourse() {
    if (this.newCourse.name.trim() && this.newCourse.description.trim()) {
      this.courseService.addCourse({ ...this.newCourse });
      this.newCourse = { name: '', description: '' }; // Reset form fields
      this.loadCourses(); // Refresh the course list
    }
  }

  // Remove a course
  removeCourse(courseName: string) {
    this.courseService.removeCourse(courseName);
    this.loadCourses(); // Refresh the course list
  }
}