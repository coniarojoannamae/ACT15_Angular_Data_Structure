import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  private composerList: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }[] = [
    { name: 'Ludwig van Beethoven', born: '1770', died: '1827', nationality: 'German', famousWorks: ['Symphony No. 9', 'Für Elise'] },
    { name: 'Wolfgang Amadeus Mozart', born: '1756', died: '1791', nationality: 'Austrian', famousWorks: ['The Magic Flute', 'Requiem'] },
    { name: 'Johann Sebastian Bach', born: '1685', died: '1750', nationality: 'German', famousWorks: ['Toccata and Fugue in D Minor', 'Brandenburg Concertos'] }
  ];

  // Get the list of composers
  getComposers() {
    return this.composerList;
  }

  // Add a new composer
  addComposer(composer: { name: string, born: string, died: string, nationality: string, famousWorks: string[] }) {
    this.composerList.push(composer);
  }

  // Remove a composer by name
  removeComposer(name: string) {
    this.composerList = this.composerList.filter(composer => composer.name !== name);
  }
}
