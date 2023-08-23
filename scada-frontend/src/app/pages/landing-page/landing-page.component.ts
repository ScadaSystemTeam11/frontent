import { Component } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  loginFormVisible: boolean = true;

  constructor(credentialsService : CredentialsService){
    console.log(this.loginFormVisible);
    credentialsService.loginFormVisible$.subscribe(
      visible => this.loginFormVisible = visible
    );
    
  }
}
