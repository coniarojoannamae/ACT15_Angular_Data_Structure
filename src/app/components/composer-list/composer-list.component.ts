import { Component, OnInit } from '@angular/core';
import { ComposerService } from './composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composerList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [];
  newComposer = { name: '', born: '', died: '', nationality: '', famousWorks: '' };

  constructor(private composerService: ComposerService) {}

  ngOnInit() {
    this.composerList = this.composerService.getComposers();
  }

  addComposer() {
    const famousWorksArray = this.newComposer.famousWorks.split(',').map(work => work.trim());
    if (this.newComposer.name.trim() && this.newComposer.born.trim() && this.newComposer.nationality.trim()) {
      this.composerService.addComposer({
        name: this.newComposer.name,
        born: this.newComposer.born,
        died: this.newComposer.died || 'N/A', // Default to 'N/A' if no death year provided
        nationality: this.newComposer.nationality,
        famousWorks: famousWorksArray
      });
      this.newComposer = { name: '', born: '', died: '', nationality: '', famousWorks: '' }; // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
    this.composerList = this.composerService.getComposers(); // Refresh the list
  }

  removeComposer(name: string) {
    this.composerService.removeComposer(name);
    this.composerList = this.composerService.getComposers(); // Refresh the list
  }
}
