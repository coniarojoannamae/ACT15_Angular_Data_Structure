import { Component } from '@angular/core';
import { TVShowService } from './tvshow.service';
import { TVShow } from './tv-show.model';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.css']
})
export class TVShowListComponent {
  tvShowList: { title: string, genre: string, seasons: number, platform: string, releaseYear: number }[] = [];
  newTVShow = { title: '', genre: '', seasons: 0, platform: '', releaseYear: 0 };

  constructor(private tvShowService: TVShowService) {
    this.tvShowList = this.tvShowService.getTVShowList(); // Load TV shows from service
  }

  addTVShow() {
    if (this.newTVShow.title.trim() && this.newTVShow.genre.trim() && this.newTVShow.platform.trim() && this.newTVShow.seasons > 0 && this.newTVShow.releaseYear > 0) {
      this.tvShowService.addTVShow({ ...this.newTVShow });
      this.newTVShow = { title: '', genre: '', seasons: 0, platform: '', releaseYear: 0 };  // Reset the form
      this.tvShowList = this.tvShowService.getTVShowList(); // Refresh the list
    } else {
      alert('Please fill in all the details for the TV show.');
    }
  }

  removeTVShow(title: string) {
    this.tvShowService.removeTVShow(title);
    this.tvShowList = this.tvShowService.getTVShowList(); // Refresh the list
  }
}
