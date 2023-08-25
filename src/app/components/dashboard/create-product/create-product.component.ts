import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  loading = true;
  gameForm: FormGroup;
  titulo = 'CREATE NEW GAME';
  genre = new FormControl('');
  genreList: string[] = ['Action', 'Adventure', 'Role-Playing (RPG)', 'Strategy', 'Simulation', 'Puzzle', 'Sports', 'Racing', 'Fighting', 'Horror', 'Sandbox', 'Platformer', 'Shooter', 'Stealth', 'Music/Rhythm', 'Educational'];
  platform = new FormControl('');
  platformList: string[] = ['PlayStation 5 (PS5)', 'Xbox Series X', 'Nintendo Switch', 'PlayStation 4 (PS4)', 'Xbox One', 'Nintendo 3DS', 'PC (Windows)', 'PlayStation 3 (PS3)', 'Xbox 360', 'Wii U', 'Wii', 'PlayStation 2 (PS2)', 'Xbox', 'GameCube', 'PlayStation (PS1)', 'Nintendo 64', 'Super Nintendo Entertainment System (SNES)', 'Sega Genesis'];
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
    this.waiting();
    this.editGame();
  }

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 2000);
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
        this.router.navigate(['/dashboard/products-list']);
      }, error => {
        console.log(error);
        this.gameForm.reset();
      })
    } else {
      //CREATE GAME 
      console.log(GAME);
      this._gameService.createGame(GAME).subscribe(data => {
        this.toastr.success('The game was successfully created..', 'Game created!');
        this.router.navigate(['/dashboard/products-list']);
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