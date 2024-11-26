import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private playlist: { title: string; artist: string; duration: string }[] = [
    { title: 'What A Beautiful Name', artist: 'Brooke Ligertwood and Hillsong Worship', duration: '5:43' },
    { title: 'Jesus I Need You', artist: 'David Ware and Hillsong Worship', duration: '5:09' },
    { title: 'I Surrender', artist: 'Hillsong Worship and Matt Crocker', duration: '5:35' },
  ];

  getPlaylist() {
    return this.playlist;
  }

  addSong(song: { title: string; artist: string; duration: string }) {
    this.playlist.push(song);
  }

  removeSong(title: string) {
    this.playlist = this.playlist.filter((song) => song.title !== title);
  }
}
