import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
// Initial list of frameworks
  frameworksList: { name: string; language: string; description: string }[] = [
    { name: 'Angular', language: 'TypeScript', description: 'A platform for building mobile and desktop web applications.' },
    { name: 'React', language: 'JavaScript', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Vue', language: 'JavaScript', description: 'A progressive framework for building user interfaces.' }
  ];

  // Initialize new framework with default values
  newFramework = { name: '', language: '', description: '' };

  // Add a new framework to the list
  addFramework() {
    if (this.newFramework.name.trim() && this.newFramework.language.trim() && this.newFramework.description.trim()) {
      this.frameworksList.push({
        name: this.newFramework.name,
        language: this.newFramework.language,
        description: this.newFramework.description
      });
      this.newFramework = { name: '', language: '', description: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a framework by name
  removeFramework(name: string) {
    this.frameworksList = this.frameworksList.filter(framework => framework.name !== name);
  }
}
