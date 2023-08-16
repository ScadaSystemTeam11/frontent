import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService { 

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  
  constructor(private http: HttpClient, public router: Router) {}

  register(user: User): Observable<any> {
    let api = `${environment.api}/user/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  login(username : string, password : string) {
    let api = `${environment.api}/user/Login`;
    console.log(username, password);
    let result = this.http.post<any>(api, {Username : username, Password : password})
    result.subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('current_user', res);
      this.router.navigate(['home']);
      this.currentUser = res;
    });
    return result;
  }

  getCurrentUser() {
    return localStorage.getItem('current_user');
  }

  get isLoggedIn(): boolean {
    let authUser = localStorage.getItem('current_user');
    return authUser !== null ? true : false;
  }
  
  logout() {
    let removeUser = localStorage.removeItem('current_user');
    if (removeUser == null) {
      this.router.navigate(['login']);
    }
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }   
}
