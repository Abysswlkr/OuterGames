import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { CreateGameComponent } from './components/create-game/create-game.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    ListGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
