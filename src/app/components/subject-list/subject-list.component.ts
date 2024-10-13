import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: { name: string, code: string, teacher: string }[] = [
    { name: 'System Integration And  Architecture 2', code: 'SIA 102', teacher: 'Mr. Jose Gayares III' },
    { name: 'Information Assurance and Security 2', code: 'IAS 102', teacher: 'Dr. Edgardo Cruz' },
    { name: 'System Administration And Maintenance', code: 'SA 101', teacher: 'Mr. Wilber Sabado' }
  ];

  newSubject = { name: '', code: '', teacher: '' };

  addSubject() {
    if (this.newSubject.name.trim() && this.newSubject.code.trim() && this.newSubject.teacher.trim()) {
      this.subjects.push({ ...this.newSubject });
      this.newSubject = { name: '', code: '', teacher: '' }; // Reset the form
    }
  }

  removeSubject(subjectCode: string) {
    this.subjects = this.subjects.filter(subject => subject.code !== subjectCode);
  }
}
