import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private loginFormVisibleSource = new Subject<boolean>();
  loginFormVisible$ = this.loginFormVisibleSource.asObservable();

  showLoginForm() {
    this.loginFormVisibleSource.next(true);
  }

  hideLoginForm() {
    this.loginFormVisibleSource.next(false);
  }

  constructor() { }
}
