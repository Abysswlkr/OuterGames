import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  
  private authenticationSub!: Subscription;
  userAuthenticated = false;


  constructor( private _authService: AuthService ){}

  ngOnDestroy(): void {
    this.authenticationSub.unsubscribe();
  }

  ngOnInit(): void {
    this.authenticationSub = this._authService.getAuthenticatedSub().subscribe(status => {
      this.userAuthenticated = status;
    })
  }

  logout(){
    this._authService.logout()
  }

}
