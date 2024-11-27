import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css'],
})
export class LibraryListComponent implements OnInit {
  librariesList: { name: string; version: string; description: string }[] = [];
  newLibrary = { name: '', version: '', description: '' };

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.librariesList = this.libraryService.getLibrariesList();
  }

  addLibrary() {
    if (
      this.newLibrary.name.trim() &&
      this.newLibrary.version.trim() &&
      this.newLibrary.description.trim()
    ) {
      this.libraryService.addLibrary({
        name: this.newLibrary.name,
        version: this.newLibrary.version,
        description: this.newLibrary.description,
      });
      this.newLibrary = { name: '', version: '', description: '' }; // Reset the form
      this.librariesList = this.libraryService.getLibrariesList(); // Refresh the list
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  removeLibrary(name: string) {
    this.libraryService.removeLibrary(name);
    this.librariesList = this.libraryService.getLibrariesList(); // Refresh the list
  }
}
