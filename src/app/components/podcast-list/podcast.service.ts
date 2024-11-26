import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  private podcastList: { title: string, host: string, duration: string, releaseDate: string }[] = [
    { title: 'Learning Angular', host: 'John Doe', duration: '45 mins', releaseDate: '2024-09-10' },
    { title: 'The Tech Chronicles', host: 'Jane Smith', duration: '60 mins', releaseDate: '2024-10-01' },
    { title: 'Web Dev Weekly', host: 'Mike Wilson', duration: '30 mins', releaseDate: '2024-10-05' }
  ];

  // Retrieve the list of podcasts
  getPodcasts() {
    return this.podcastList;
  }

  // Add a new podcast episode
  addPodcast(podcast: { title: string, host: string, duration: string, releaseDate: string }) {
    this.podcastList.push(podcast);
  }

  // Remove a podcast episode by title
  removePodcast(title: string) {
    this.podcastList = this.podcastList.filter(podcast => podcast.title !== title);
  }
}
