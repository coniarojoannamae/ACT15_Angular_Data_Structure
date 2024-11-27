import { Component, OnInit } from '@angular/core';
import { FrameworkService } from './framework.service';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css'],
})
export class FrameworkListComponent implements OnInit {
  frameworksList: { name: string; language: string; description: string }[] = [];
  newFramework = { name: '', language: '', description: '' };

  constructor(private frameworkService: FrameworkService) {}

  ngOnInit() {
    this.frameworksList = this.frameworkService.getFrameworksList();
  }

  addFramework() {
    if (
      this.newFramework.name.trim() &&
      this.newFramework.language.trim() &&
      this.newFramework.description.trim()
    ) {
      this.frameworkService.addFramework({
        name: this.newFramework.name,
        language: this.newFramework.language,
        description: this.newFramework.description,
      });
      this.newFramework = { name: '', language: '', description: '' }; // Reset the form
      this.frameworksList = this.frameworkService.getFrameworksList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeFramework(name: string) {
    this.frameworkService.removeFramework(name);
    this.frameworksList = this.frameworkService.getFrameworksList(); // Refresh the list
  }
}
