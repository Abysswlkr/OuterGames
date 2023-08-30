import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  //http requests
  url = 'http://localhost:4000/api/games/';

  
  constructor( private http:  HttpClient) { }

  getGamesList(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createGame(game: Game): Observable<any> {
    return this.http.post(this.url, game);
  }

  getGame(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  editGame(id: string, game: Game): Observable<any> {
    return this.http.put(this.url + id, game);
  }

  filterGamesByGenre(games: Game[], genre: string): Game[] {
    return games.filter(game =>
        genre === "" || game.genre.some(g => g.toLowerCase().includes(genre.toLowerCase()))
    );
}


}
