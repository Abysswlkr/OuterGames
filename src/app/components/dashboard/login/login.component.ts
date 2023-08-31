import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from 'src/app/interfaces/AuthResponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading = true;
  hide = true;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
  });
  }

  ngOnInit(): void {
    this.waiting();
  }

  onSubmit() {
    if (this.loginForm.valid) {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this._authService.loginUser(email, password).subscribe(
          (response: AuthResponse) => {
                this._authService.setAuthToken(response.token);

                // Handle successful login response, e.g., redirect
                console.log("Login successful:", response);
            },
            error => {
                // Handle login error, e.g., show error message
                console.error("Login error:", error);
            }
        );
    }
}

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 1000);
  }


}
