import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  loading = true;
  id: string | null;
  gameDetails: any;

  constructor(private _gameService: GameService,
              private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.waiting();
    this.getGameDetails();
  }

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 1000);
  }

  getGameDetails() {
    if(this.id !== null) {
      this._gameService.getGame(this.id).subscribe(data => {
        this.gameDetails = data;
      })
    }
  }

}
