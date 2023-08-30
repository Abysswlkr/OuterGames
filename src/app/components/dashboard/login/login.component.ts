import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading = true;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() {

  }

  ngOnInit(): void {
    this.waiting();
  }

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 1000);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
