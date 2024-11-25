import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', course: '' };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent);
    this.loadStudents();
    this.newStudent = { id: 0, name: '', course: '' }; // Reset form
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);
    this.loadStudents();
  }
}