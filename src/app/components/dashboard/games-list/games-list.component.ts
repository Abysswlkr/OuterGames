import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit{
  listGames: Game[] = [];
  searchTerm = '';
  notFound = 'No matching results found..'
  genres: string[] = ['Action', 'Adventure', 'Role-Playing (RPG)', 'Strategy', 'Simulation', 'Puzzle', 'Sports', 'Racing', 'Fighting', 'Horror', 'Sandbox', 'Platformer', 'Shooter', 'Stealth', 'Music/Rhythm', 'Educational'];
  selectedGenre: string = '';
  loading = true;
  
  constructor(private _gameService: GameService, 
              private router: Router ) {

  }

  ngOnInit(): void {
    this.waiting();
    this.getGames();
  }

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 2000);
  }

  getGames() {
    this._gameService.getGamesList().subscribe(data => {
      console.log (data);
      this.listGames = data;
    }, error => {
        console.log(error);
    })
  }

  searchGames() {
    if (this.searchTerm.trim() !== '') {
      this.listGames = this.listGames.filter(game => 
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    } else {
      this.getGames();
    }
  }

}


