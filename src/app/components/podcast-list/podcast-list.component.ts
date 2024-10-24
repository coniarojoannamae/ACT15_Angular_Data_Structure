import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  // Initial list of podcast episodes
  podcastList: { title: string, host: string, duration: string, releaseDate: string }[] = [
    { title: 'Learning Angular', host: 'John Doe', duration: '45 mins', releaseDate: '2024-09-10' },
    { title: 'The Tech Chronicles', host: 'Jane Smith', duration: '60 mins', releaseDate: '2024-10-01' },
    { title: 'Web Dev Weekly', host: 'Mike Wilson', duration: '30 mins', releaseDate: '2024-10-05' }
  ];

  // Initialize new podcast with default values
  newPodcast = { title: '', host: '', duration: '', releaseDate: '' };

  // Add a new podcast episode to the list
  addPodcast() {
    if (this.newPodcast.title.trim() && this.newPodcast.host.trim() && this.newPodcast.duration.trim() && this.newPodcast.releaseDate.trim()) {
      this.podcastList.push({
        title: this.newPodcast.title,
        host: this.newPodcast.host,
        duration: this.newPodcast.duration,
        releaseDate: this.newPodcast.releaseDate
      });
      this.newPodcast = { title: '', host: '', duration: '', releaseDate: '' };  // Reset the form
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  // Remove a podcast episode by title
  removePodcast(title: string) {
    this.podcastList = this.podcastList.filter(podcast => podcast.title !== title);
  }
}
