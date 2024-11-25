import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language-list.service';
import { Language } from './language.model';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  languages: { name: string, paradigm: string, releasedYear: number }[] = [];
  newLanguage = { name: '', paradigm: '', releasedYear: 0 };

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languages = this.languageService.getLanguages(); // Fetch languages from the service
  }

  // Add a new programming language
  addLanguage() {
    if (this.newLanguage.name.trim() && this.newLanguage.paradigm.trim() && this.newLanguage.releasedYear > 0) {
      this.languageService.addLanguage({ ...this.newLanguage }); // Add language via service
      this.newLanguage = { name: '', paradigm: '', releasedYear: 0 }; // Reset form
    } else {
      alert('Please enter valid details for the programming language.');
    }
  }

  // Remove a programming language by name
  removeLanguage(languageName: string) {
    this.languageService.removeLanguage(languageName); // Remove language via service
    this.languages = this.languageService.getLanguages(); // Refresh the list
  }
}
