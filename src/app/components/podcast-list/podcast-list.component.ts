import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent implements OnInit {
  podcastList: { title: string, host: string, duration: string, releaseDate: string }[] = [];
  newPodcast = { title: '', host: '', duration: '', releaseDate: '' };

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.podcastList = this.podcastService.getPodcasts();
  }

  addPodcast() {
    if (this.newPodcast.title.trim() && this.newPodcast.host.trim() && this.newPodcast.duration.trim() && this.newPodcast.releaseDate.trim()) {
      this.podcastService.addPodcast({
        title: this.newPodcast.title,
        host: this.newPodcast.host,
        duration: this.newPodcast.duration,
        releaseDate: this.newPodcast.releaseDate
      });
      this.newPodcast = { title: '', host: '', duration: '', releaseDate: '' }; // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
    this.podcastList = this.podcastService.getPodcasts(); // Refresh the list
  }

  removePodcast(title: string) {
    this.podcastService.removePodcast(title);
    this.podcastList = this.podcastService.getPodcasts(); // Refresh the list
  }
}
