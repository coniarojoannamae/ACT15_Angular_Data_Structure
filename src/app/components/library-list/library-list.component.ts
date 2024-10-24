import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  // Initial list of libraries
  librariesList: { name: string; version: string; description: string }[] = [
    { name: 'Angular', version: '12.2.0', description: 'A platform for building mobile and desktop web applications.' },
    { name: 'Lodash', version: '4.17.21', description: 'A modern JavaScript utility library delivering modularity, performance, & extras.' },
    { name: 'RxJS', version: '7.5.5', description: 'A library for reactive programming using observables.' }
  ];

  // Initialize new library with default values
  newLibrary = { name: '', version: '', description: '' };

  // Add a new library to the list
  addLibrary() {
    if (this.newLibrary.name.trim() && this.newLibrary.version.trim() && this.newLibrary.description.trim()) {
      this.librariesList.push({
        name: this.newLibrary.name,
        version: this.newLibrary.version,
        description: this.newLibrary.description
      });
      this.newLibrary = { name: '', version: '', description: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a library by name
  removeLibrary(name: string) {
    this.librariesList = this.librariesList.filter(library => library.name !== name);
  }
}

