import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
  // Initial list of songs in the playlist
  playlist: { title: string, artist: string, duration: string }[] = [
    { title: 'What A Beautiful Name', artist: 'Brooke Ligertwood and Hillsong Worship', duration: '5:43' },
    { title: 'Jesus I Need You', artist: 'David Ware and Hillsong Worship', duration: '5:09' },
    { title: 'I Surrender', artist: ' Hillsong Worship and Matt Crocker', duration: '5:35' }
  ];
  // Initialize new song with default values
  newSong = { title: '', artist: '', duration: '' };

  // Add a new song to the playlist
  addSong() {
    if (this.newSong.title.trim() && this.newSong.artist.trim() && this.newSong.duration.trim()) {
      this.playlist.push({ ...this.newSong });
      this.newSong = { title: '', artist: '', duration: '' };  // Reset the form
    } else {
      alert('Please enter valid details for the song.');
    }
  }

  // Remove a song by title
  removeSong(songTitle: string) {
    this.playlist = this.playlist.filter(song => song.title !== songTitle);
  }

}
