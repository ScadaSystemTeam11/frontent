import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showSharedDropdown : boolean

  constructor(private authService : AuthenticationService){
    this.showSharedDropdown = false;
  }

  logout(){
    this.authService.logout();
  }

  toggleSharedDropdown() {
    this.showSharedDropdown = !this.showSharedDropdown;
  }

}
