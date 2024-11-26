import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoList: { videoTitle: string, category: string, duration: number, director: string }[] = [
    { videoTitle: 'Inception', category: 'Science Fiction', duration: 148, director: 'Christopher Nolan' },
    { videoTitle: 'The Godfather', category: 'Crime', duration: 175, director: 'Francis Ford Coppola' },
  ];

  // Get the list of videos
  getVideoList() {
    return this.videoList;
  }

  // Add a new video to the list
  addVideo(video: { videoTitle: string, category: string, duration: number, director: string }) {
    this.videoList.push(video);
  }

  // Remove a video by its title
  removeVideo(videoTitle: string) {
    this.videoList = this.videoList.filter(video => video.videoTitle !== videoTitle);
  }
}
