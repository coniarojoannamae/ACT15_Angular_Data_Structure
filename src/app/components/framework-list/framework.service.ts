import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  private frameworksList: { name: string; language: string; description: string }[] = [
    {
      name: 'Angular',
      language: 'TypeScript',
      description: 'A platform for building mobile and desktop web applications.',
    },
    {
      name: 'React',
      language: 'JavaScript',
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      name: 'Vue',
      language: 'JavaScript',
      description: 'A progressive framework for building user interfaces.',
    },
  ];

  // Get the list of frameworks
  getFrameworksList() {
    return this.frameworksList;
  }

  // Add a new framework
  addFramework(framework: { name: string; language: string; description: string }) {
    this.frameworksList.push(framework);
  }

  // Remove a framework by name
  removeFramework(name: string) {
    this.frameworksList = this.frameworksList.filter((framework) => framework.name !== name);
  }
}
