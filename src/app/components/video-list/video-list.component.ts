import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videoList: { videoTitle: string, category: string, duration: number, director: string }[] = [];
  newVideo = { videoTitle: '', category: '', duration: 0, director: '' };

  constructor(private videoService: VideoService) {
    this.videoList = this.videoService.getVideoList(); // Load video list from service
  }

  addVideo() {
    if (this.newVideo.videoTitle.trim() && this.newVideo.category.trim() && this.newVideo.director.trim() && this.newVideo.duration > 0) {
      this.videoService.addVideo({ ...this.newVideo });
      this.newVideo = { videoTitle: '', category: '', duration: 0, director: '' }; // Reset the form
      this.videoList = this.videoService.getVideoList(); // Refresh the list
    } else {
      alert('Please fill in all the details for the video.');
    }
  }

  removeVideo(videoTitle: string) {
    this.videoService.removeVideo(videoTitle);
    this.videoList = this.videoService.getVideoList(); // Refresh the list
  }
}
