import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, Subject } from "rxjs";
import { AuthResponse } from "../interfaces/AuthResponse";
import { Router } from "@angular/router";

@Injectable({providedIn:"root"})
export class AuthService{

    url = 'http://localhost:4000/api/users/';
    authToken: string | null = null;   
    private authenticatedSub = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private http: HttpClient, private router: Router){

    }

    getAuthenticatedSub(){
        return this.authenticatedSub.asObservable();
    }

    singUpUser(user: User){
        this.http.post(this.url, user).subscribe(res =>{
            console.log(res);
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
                        this.router.navigate(['/']);
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
        
    }



    setAuthToken(token: string) {
        this.authToken = token;
    }

}