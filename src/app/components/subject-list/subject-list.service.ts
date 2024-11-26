import { Injectable } from '@angular/core';

export interface Subject {
  name: string;
  code: string;
  teacher: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjects: Subject[] = [
    { name: 'System Integration And Architecture 2', code: 'SIA 102', teacher: 'Mr. Jose Gayares III' },
    { name: 'Information Assurance and Security 2', code: 'IAS 102', teacher: 'Dr. Edgardo Cruz' },
    { name: 'System Administration And Maintenance', code: 'SA 101', teacher: 'Mr. Wilber Sabado' }
  ];

  getSubjects() {
    return [...this.subjects];  // Return a copy of the subjects array
  }

  addSubject(subject: Subject) {
    this.subjects.push(subject);
  }

  removeSubject(subjectCode: string) {
    this.subjects = this.subjects.filter(subject => subject.code !== subjectCode);
  }
}
