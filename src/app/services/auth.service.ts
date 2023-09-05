import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, Subject, map, tap } from "rxjs";
import { AuthResponse } from "../interfaces/AuthResponse";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({providedIn:"root"})
export class AuthService{


    url = 'http://localhost:4000/api/users/';
    jwt = 'secret_string';
    authToken: string | null = null;   
    currentUser: User | null = null;
    private authenticatedSub = new Subject<boolean>();
    private isAuthenticated = false;
    

    constructor(private http: HttpClient, private router: Router,
                private toastr: ToastrService){

    }

    getAuthenticatedSub(){
        return this.authenticatedSub.asObservable();
    }

    singUpUser(user: User){
        this.http.post(this.url, user).subscribe(res =>{
            console.log(res);
            this.router.navigate(['/dashboard/login']);
            this.toastr.success('Welcome to Outer Games!', 'Please log in now!')
        })
    }

    loginUser(email: string, password: string): Observable<AuthResponse> {
        const authData = { email: email, password: password };
        
        return new Observable<AuthResponse>(observer => {
            this.http.post<AuthResponse>(`${this.url}login`, authData).subscribe(
                res => {
                    this.authToken = res.token;
                    if(this.authToken){
                        this.authenticatedSub.next(true);
                        this.isAuthenticated = true;
                        this.toastr.success('Login successful!', 'Welcome to Outer Games')
                        this.router.navigate(['/']);
                        console.log(this.authToken)
                    }
                }
            );
        });
    }




    logout() {
        this.authToken = '';
        this.isAuthenticated = false;
        this.authenticatedSub.next(false);
        this.router.navigate(['/'])
        this.toastr.info('Thanks for choose us!', 'Back soon')
    }



    setAuthToken(token: string) {
        this.authToken = token;
    }



}