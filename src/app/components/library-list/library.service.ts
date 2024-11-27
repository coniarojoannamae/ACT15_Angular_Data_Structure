import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private librariesList: { name: string; version: string; description: string }[] = [
    {
      name: 'Angular',
      version: '12.2.0',
      description: 'A platform for building mobile and desktop web applications.',
    },
    {
      name: 'Lodash',
      version: '4.17.21',
      description: 'A modern JavaScript utility library delivering modularity, performance, & extras.',
    },
    {
      name: 'RxJS',
      version: '7.5.5',
      description: 'A library for reactive programming using observables.',
    },
  ];

  // Get the list of libraries
  getLibrariesList() {
    return this.librariesList;
  }

  // Add a new library
  addLibrary(library: { name: string; version: string; description: string }) {
    this.librariesList.push(library);
  }

  // Remove a library by name
  removeLibrary(name: string) {
    this.librariesList = this.librariesList.filter((library) => library.name !== name);
  }
}
