import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { CreateGameComponent } from './components/create-game/create-game.component';

const routes: Routes = [
  { path: 'list-games', component: ListGamesComponent },
  { path: 'create-game', component: CreateGameComponent},
  { path: 'edit-game/:id', component: CreateGameComponent},
  { path: '**', redirectTo: 'list-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
