import { Component } from '@angular/core';
import { ClassroomListService } from './classroom-list.service';
import { Student } from './student.model';
@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css'],
})
export class ClassroomListComponent {
  students: { name: string; age: number; grade: string }[] = [];
  newStudent = { name: '', age: 0, grade: '' };

  constructor(private classroomListService: ClassroomListService) {
    this.students = this.classroomListService.getStudents();
  }

  // Add a new student
  addStudent() {
    if (
      this.newStudent.name.trim() &&
      this.newStudent.age > 0 &&
      this.newStudent.grade.trim()
    ) {
      this.classroomListService.addStudent({ ...this.newStudent });
      this.newStudent = { name: '', age: 0, grade: '' }; // Reset the form
    } else {
      alert('Please enter valid details for the student.');
    }
    this.students = this.classroomListService.getStudents(); // Refresh the list
  }

  // Remove a student by name
  removeStudent(studentName: string) {
    this.classroomListService.removeStudent(studentName);
    this.students = this.classroomListService.getStudents(); // Refresh the list
  }
}
