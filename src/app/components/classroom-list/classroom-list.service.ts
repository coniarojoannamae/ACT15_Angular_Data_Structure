import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassroomListService {
  private students: { name: string; age: number; grade: string }[] = [
    { name: 'Jana Madelar', age: 17, grade: 'Grade 10' },
    { name: 'Mhae Coniaro', age: 18, grade: 'Grade 11' },
  ];

  // Get the list of students
  getStudents() {
    return this.students;
  }

  // Add a new student to the list
  addStudent(student: { name: string; age: number; grade: string }) {
    this.students.push(student);
  }

  // Remove a student by name
  removeStudent(studentName: string) {
    this.students = this.students.filter(student => student.name !== studentName);
  }
}
