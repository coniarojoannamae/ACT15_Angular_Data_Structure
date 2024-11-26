import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = [
    { title: 'The Avengers', genre: 'Action', showtime: '7:00 PM' },
    { title: 'Frozen II', genre: 'Animation', showtime: '5:30 PM' },
    { title: 'Inception', genre: 'Sci-Fi', showtime: '9:00 PM' },
  ];

  getMovies() {
    return [...this.movies];
  }

  addMovie(movie: { title: string; genre: string; showtime: string }) {
    this.movies.push(movie);
  }

  removeMovie(title: string) {
    this.movies = this.movies.filter(movie => movie.title !== title);
  }
}
