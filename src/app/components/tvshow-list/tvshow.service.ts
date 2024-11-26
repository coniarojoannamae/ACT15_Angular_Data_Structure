import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {
  private tvShowList: { title: string, genre: string, seasons: number, platform: string, releaseYear: number }[] = [
    { title: 'Stranger Things', genre: 'Science Fiction', seasons: 4, platform: 'Netflix', releaseYear: 2016 },
    { title: 'The Mandalorian', genre: 'Adventure', seasons: 2, platform: 'Disney+', releaseYear: 2019 },
    { title: 'Breaking Bad', genre: 'Crime', seasons: 5, platform: 'AMC', releaseYear: 2008 }
  ];

  // Get the list of TV shows
  getTVShowList() {
    return this.tvShowList;
  }

  // Add a new TV show to the list
  addTVShow(tvShow: { title: string, genre: string, seasons: number, platform: string, releaseYear: number }) {
    this.tvShowList.push(tvShow);
  }

  // Remove a TV show by its title
  removeTVShow(title: string) {
    this.tvShowList = this.tvShowList.filter(show => show.title !== title);
  }
}
