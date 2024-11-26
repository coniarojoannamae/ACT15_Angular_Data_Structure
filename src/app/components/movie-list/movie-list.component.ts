import { Component } from '@angular/core';
import  { MovieService } from './movie-list.service';
import {Movie}  from "./movie.model";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: { title: string; genre: string; showtime: string }[] = [];
  newMovie = { title: '', genre: '', showtime: '' };

  constructor(private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = this.movieService.getMovies();
  }

  addMovie() {
    if (this.newMovie.title.trim() && this.newMovie.genre.trim() && this.newMovie.showtime.trim()) {
      this.movieService.addMovie({ ...this.newMovie });
      this.newMovie = { title: '', genre: '', showtime: '' }; // Reset the form fields
      this.loadMovies();
    }
  }

  removeMovie(title: string) {
    this.movieService.removeMovie(title);
    this.loadMovies();
  }
}