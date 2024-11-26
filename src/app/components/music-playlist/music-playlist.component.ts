import { Component } from '@angular/core';
import { MusicService } from './music.service';
import { Song } from './song.model';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css'],
})
export class MusicPlaylistComponent {
  playlist: { title: string; artist: string; duration: string }[] = [];
  newSong = { title: '', artist: '', duration: '' };

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.playlist = this.musicService.getPlaylist();
  }

  addSong() {
    if (this.newSong.title.trim() && this.newSong.artist.trim() && this.newSong.duration.trim()) {
      this.musicService.addSong({ ...this.newSong });
      this.newSong = { title: '', artist: '', duration: '' }; // Reset form
    } else {
      alert('Please enter valid details for the song.');
    }
  }

  removeSong(songTitle: string) {
    this.musicService.removeSong(songTitle);
    this.playlist = this.musicService.getPlaylist(); // Refresh the playlist
  }
}
