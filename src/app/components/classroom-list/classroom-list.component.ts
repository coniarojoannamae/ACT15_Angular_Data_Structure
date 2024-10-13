import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  students: { name: string, age: number, grade: string }[] = [
    { name: 'Jana Madelar', age: 17, grade: 'Grade 10' },
    { name: 'Mhae Coniaro', age: 18, grade: 'Grade 11' },
  ];
  newStudent = { name: '', age: 0, grade: '' };

  addStudent() {
    if (this.newStudent.name.trim() && this.newStudent.age > 0 && this.newStudent.grade.trim()) {
      this.students.push({ ...this.newStudent });
      this.newStudent = { name: '', age: 0, grade: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the student.');
    }
  }
  removeStudent(studentName: string) {
    this.students = this.students.filter(student => student.name !== studentName);
  }
}
