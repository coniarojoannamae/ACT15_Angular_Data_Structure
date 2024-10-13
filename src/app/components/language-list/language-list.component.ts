import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  // Initial list of programming languages
  languages: { name: string, paradigm: string, releasedYear: number }[] = [
    { name: 'Python', paradigm: 'Object-Oriented, Functional', releasedYear: 1991 },
    { name: 'JavaScript', paradigm: 'Object-Oriented, Functional', releasedYear: 1995 },
    { name: 'C++', paradigm: 'Object-Oriented, Procedural', releasedYear: 1985 },
  ];

  // Initialize new language with default values
  newLanguage = { name: '', paradigm: '', releasedYear: 0 };

  // Add a new language
  addLanguage() {
    if (this.newLanguage.name.trim() && this.newLanguage.paradigm.trim() && this.newLanguage.releasedYear > 0) {
      this.languages.push({ ...this.newLanguage });
      this.newLanguage = { name: '', paradigm: '', releasedYear: 0 };  // Reset the form
    } else {
      alert('Please enter valid details for the programming language.');
    }
  }

  // Remove a language by name
  removeLanguage(languageName: string) {
    this.languages = this.languages.filter(language => language.name !== languageName);
  }
}
