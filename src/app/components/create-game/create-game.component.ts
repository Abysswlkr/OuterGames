import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  gameForm: FormGroup;
  titulo = 'CREATE NEW GAME';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _gameService: GameService,
              private aRouter: ActivatedRoute ) {
    this.gameForm =  this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      platform: ['', Validators.required],
      price: ['', Validators.required],
      releaseDate: ['', Validators.required],
      publisher: ['', Validators.required],
      imageUrl: ['', Validators.required],
      isOnSale: [''],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.editGame();
  }

  createGame() {
    const GAME: Game = {
      title: this.gameForm.get('title')?.value,
      description: this.gameForm.get('description')?.value,
      genre: this.gameForm.get('genre')?.value,
      platform: this.gameForm.get('platform')?.value,
      price: this.gameForm.get('price')?.value,
      releaseDate: this.gameForm.get('releaseDate')?.value,
      publisher: this.gameForm.get('publisher')?.value,
      imageUrl: this.gameForm.get('imageUrl')?.value,
      isOnSale: this.gameForm.get('isOnSale')?.value,
    }

    //EDIT OR CREATE 
    if(this.id !== null){
      //EDIT GAME
      this._gameService.editGame(this.id, GAME).subscribe(data => {
        this.toastr.info('The game parameters change successfully..', 'Game edited!');
        this.router.navigate(['/list-games']);
      }, error => {
        console.log(error);
        this.gameForm.reset();
      })
    } else {
      //CREATE GAME 
      console.log(GAME);
      this._gameService.createGame(GAME).subscribe(data => {
        this.toastr.success('The game was successfully created..', 'Game created!');
        this.router.navigate(['/list-games']);
      }, error => {
        console.log(error);
        this.gameForm.reset();
      })
    }


  }

  editGame() {
    if(this.id !== null) {
      this.titulo = 'EDIT GAME DATA'
      this._gameService.getGame(this.id).subscribe(data => {
        this.gameForm.setValue({
          title: data.title,
          description: data.description,
          genre: data.genre,
          platform: data.platform,
          price: data.price,
          releaseDate: data.releaseDate,
          publisher: data.publisher,
          imageUrl: data.imageUrl,
          isOnSale: data.isOnSale,
        })
      })
    }
  }

}
