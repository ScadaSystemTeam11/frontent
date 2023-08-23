import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginFormVisible = new EventEmitter<boolean>();
  email: string;
  password: string;
  invalidCredentials : boolean;

  constructor(private authService : AuthenticationService){
    this.email = "";
    this.password = "";
    this.invalidCredentials = false;
  }

  login() : void {
    let result = this.authService.login(this.email, this.password)
  }

  close(){
    this.loginFormVisible.emit(false);
  }
}
