import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { AlarmService } from 'src/app/services/alarm.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showSharedDropdown : boolean

  constructor(private authService : AuthenticationService, private alarmService : AlarmService){
    this.showSharedDropdown = false;
    this.alarmService.hubConnection.on('AlarmAlerted', (data: any) => {    
      const alarmAlertObj = JSON.parse(data);
      //this.alarmAlerts.unshift(alarmAlertObj);
      //this.cdRef.detectChanges();
    });
  }

  logout(){
    this.authService.logout();
  }

  toggleSharedDropdown() {
    this.showSharedDropdown = !this.showSharedDropdown;
  }

}
