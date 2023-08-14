import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  listGames: Game[] = [];



  constructor( private _gameService: GameService,
                private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this._gameService.getGamesList().subscribe(data => {
      console.log (data);
      this.listGames = data;
    }, error => {
        console.log(error);
    })
  }

  deleteGame(id: any) {
    this._gameService.deleteGame(id).subscribe(data =>{
      this.toastr.error('The game was deleted successfuly', 'Game deleted..')
      this.getGames();
    }, error =>{
      console.log(error);
    })
  }

}
