import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Jana Coniaro', course: 'BS IT' },
    { id: 2, name: 'Mhae Madelar', course: 'BS CS' },
  ];

  getStudents(): Student[] {
    return [...this.students];
  }

  addStudent(student: Student) {
    const id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1;
    this.students.push({ ...student, id });
  }

  removeStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
