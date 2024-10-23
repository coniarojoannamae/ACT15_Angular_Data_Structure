import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  // Initial list of videos
  videoList: { videoTitle: string, category: string, duration: number, director: string }[] = [
    { videoTitle: 'Inception', category: 'Science Fiction', duration: 148, director: 'Christopher Nolan' },
    { videoTitle: 'The Godfather', category: 'Crime', duration: 175, director: 'Francis Ford Coppola' },
  ];

  // Initialize new video with default values
  newVideo = { videoTitle: '', category: '', duration: 0, director: '' };

  // Add a new video to the list
  addVideo() {
    if (this.newVideo.videoTitle.trim() && this.newVideo.category.trim() && this.newVideo.director.trim() && this.newVideo.duration > 0) {
      this.videoList.push({ ...this.newVideo });
      this.newVideo = { videoTitle: '', category: '', duration: 0, director: '' };  // Reset the form
    } else {
      alert('Please fill in all the details for the video.');
    }
  }

  // Remove a video by videoTitle
  removeVideo(videoTitle: string) {
    this.videoList = this.videoList.filter(video => video.videoTitle !== videoTitle);
  }
}
