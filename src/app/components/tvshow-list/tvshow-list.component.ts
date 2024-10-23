import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  // Initial list of TV shows
  tvShowList: { title: string, genre: string, seasons: number, platform: string, releaseYear: number }[] = [
    { title: 'Stranger Things', genre: 'Science Fiction', seasons: 4, platform: 'Netflix', releaseYear: 2016 },
    { title: 'The Mandalorian', genre: 'Adventure', seasons: 2, platform: 'Disney+', releaseYear: 2019 },
    { title: 'Breaking Bad', genre: 'Crime', seasons: 5, platform: 'AMC', releaseYear: 2008 }
  ];

  // Initialize new TV show with default values
  newTVShow = { title: '', genre: '', seasons: 0, platform: '', releaseYear: 0 };

  // Add a new TV show to the list
  addTVShow() {
    if (this.newTVShow.title.trim() && this.newTVShow.genre.trim() && this.newTVShow.platform.trim() && this.newTVShow.seasons > 0 && this.newTVShow.releaseYear > 0) {
      this.tvShowList.push({ ...this.newTVShow });
      this.newTVShow = { title: '', genre: '', seasons: 0, platform: '', releaseYear: 0 };  // Reset the form
    } else {
      alert('Please fill in all the details for the TV show.');
    }
  }

  // Remove a TV show by title
  removeTVShow(title: string) {
    this.tvShowList = this.tvShowList.filter(show => show.title !== title);
  }
}
