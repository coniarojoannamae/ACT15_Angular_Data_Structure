import { Component } from '@angular/core';
import {Movie}  from "./movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: { title: string, genre: string, showtime: string }[] = [
    { title: 'The Avengers', genre: 'Action', showtime: '7:00 PM' },
    { title: 'Frozen II', genre: 'Animation', showtime: '5:30 PM' },
    { title: 'Inception', genre: 'Sci-Fi', showtime: '9:00 PM' }
  ];

  newMovie = { title: '', genre: '', showtime: '' };

  addMovie() {
    if (this.newMovie.title.trim() && this.newMovie.genre.trim() && this.newMovie.showtime.trim()) {
      this.movies.push({ ...this.newMovie });
      this.newMovie = { title: '', genre: '', showtime: '' }; // Reset the form
    }
  }

  removeMovie(movieTitle: string) {
    this.movies = this.movies.filter(movie => movie.title !== movieTitle);
  }
}
