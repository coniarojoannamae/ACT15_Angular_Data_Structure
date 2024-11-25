import { Component, OnInit } from '@angular/core';
import { GameService } from './game-list.service';
import { Game } from './game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: { title: string, genre: string, releaseYear: number }[] = [];
  newGame = { title: '', genre: '', releaseYear: 0 };

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getGames(); // Fetch the list of games from the service
  }

  // Add a new game
  addGame() {
    if (this.newGame.title.trim() && this.newGame.genre.trim() && this.newGame.releaseYear > 0) {
      this.gameService.addGame({ ...this.newGame }); // Add game via service
      this.newGame = { title: '', genre: '', releaseYear: 0 }; // Reset form
      this.games = this.gameService.getGames(); // Refresh the list
    } else {
      alert('Please enter valid details for the game.');
    }
  }

  // Remove a game by title
  removeGame(gameTitle: string) {
    this.gameService.removeGame(gameTitle); // Remove game via service
    this.games = this.gameService.getGames(); // Refresh the list
  }
}
