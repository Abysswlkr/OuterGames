import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  gameForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
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
   }

  ngOnInit(): void {
    
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
    console.log(GAME);
    this.router.navigate(['/list-games']);
  }

}
