import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  // Initial list of famous composers
  composerList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [
    { name: 'Ludwig van Beethoven', born: '1770', died: '1827', nationality: 'German', famousWorks: ['Symphony No. 9', 'Für Elise'] },
    { name: 'Wolfgang Amadeus Mozart', born: '1756', died: '1791', nationality: 'Austrian', famousWorks: ['The Magic Flute', 'Requiem'] },
    { name: 'Johann Sebastian Bach', born: '1685', died: '1750', nationality: 'German', famousWorks: ['Toccata and Fugue in D Minor', 'Brandenburg Concertos'] }
  ];

  // Initialize new composer with default values
  newComposer = { name: '', born: '', died: '', nationality: '', famousWorks: '' };

  // Add a new composer to the list
  addComposer() {
    const famousWorksArray = this.newComposer.famousWorks.split(',').map(work => work.trim());
    if (this.newComposer.name.trim() && this.newComposer.born.trim() && this.newComposer.nationality.trim()) {
      this.composerList.push({
        name: this.newComposer.name,
        born: this.newComposer.born,
        died: this.newComposer.died || 'N/A',  // Mark "N/A" if the composer is alive
        nationality: this.newComposer.nationality,
        famousWorks: famousWorksArray
      });
      this.newComposer = { name: '', born: '', died: '', nationality: '', famousWorks: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  // Remove a composer by name
  removeComposer(name: string) {
    this.composerList = this.composerList.filter(composer => composer.name !== name);
  }
}
