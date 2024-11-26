import { Component } from '@angular/core';
import { SubjectService } from './subject-list.service';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  subjects: Subject[] = [];
  newSubject: Subject = { name: '', code: '', teacher: '' };

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
  }

  addSubject() {
    if (this.newSubject.name.trim() && this.newSubject.code.trim() && this.newSubject.teacher.trim()) {
      this.subjectService.addSubject(this.newSubject);
      this.newSubject = { name: '', code: '', teacher: '' }; // Reset the form
    }
  }
  
  removeSubject(subjectCode: string) {
    this.subjectService.removeSubject(subjectCode);
  }
}
