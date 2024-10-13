import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  // Initial list of video games
  games: { title: string, genre: string, releaseYear: number }[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-Adventure', releaseYear: 2017 },
    { title: 'Cyberpunk 2077', genre: 'RPG', releaseYear: 2020 },
  ];

  // Initialize new game with default values
  newGame = { title: '', genre: '', releaseYear: 0 };

  // Add a new game
  addGame() {
    if (this.newGame.title.trim() && this.newGame.genre.trim() && this.newGame.releaseYear > 0) {
      this.games.push({ ...this.newGame });
      this.newGame = { title: '', genre: '', releaseYear: 0 };  // Reset the form
    } else {
      alert('Please enter valid details for the game.');
    }
  }

  // Remove a game by title
  removeGame(gameTitle: string) {
    this.games = this.games.filter(game => game.title !== gameTitle);
  }
}
