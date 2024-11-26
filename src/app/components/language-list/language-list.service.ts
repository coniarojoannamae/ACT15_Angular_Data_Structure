import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages: { name: string, paradigm: string, releasedYear: number }[] = [
    { name: 'Python', paradigm: 'Object-Oriented, Functional', releasedYear: 1991 },
    { name: 'JavaScript', paradigm: 'Object-Oriented, Functional', releasedYear: 1995 },
    { name: 'C++', paradigm: 'Object-Oriented, Procedural', releasedYear: 1985 }
  ];

  // Get the list of languages
  getLanguages() {
    return this.languages;
  }

  // Add a new language
  addLanguage(language: { name: string, paradigm: string, releasedYear: number }) {
    this.languages.push(language);
  }

  // Remove a language by name
  removeLanguage(languageName: string) {
    this.languages = this.languages.filter(language => language.name !== languageName);
  }
}
