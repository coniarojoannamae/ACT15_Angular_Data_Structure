import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: { title: string, genre: string, releaseYear: number }[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-Adventure', releaseYear: 2017 },
    { title: 'Cyberpunk 2077', genre: 'RPG', releaseYear: 2020 }
  ];

  // Retrieve the list of games
  getGames() {
    return this.games;
  }

  // Add a new game
  addGame(game: { title: string, genre: string, releaseYear: number }) {
    this.games.push(game);
  }

  // Remove a game by title
  removeGame(gameTitle: string) {
    this.games = this.games.filter(game => game.title !== gameTitle);
  }
}
