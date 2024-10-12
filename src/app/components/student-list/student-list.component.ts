// student.component.css
import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Jana Coniaro', course: 'BSIT' },
    { id: 2, name: 'Mhae Madelar', course: 'BSCS' }
  ];

  newStudent: Student = { id: 0, name: '', course: '' };

  addStudent() {
    const id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1;
    const student = { ...this.newStudent, id };
    this.students.push(student);
    this.newStudent = { id: 0, name: '', course: '' }; // Reset the form
  }

  removeStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
