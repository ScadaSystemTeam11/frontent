import { Injectable } from '@angular/core';
import { HubConnection, HttpClient, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  api : string = `${environment.api}/alarm`
   hubConnection: HubConnection;


  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5022/alarmAlertedHub')
      .build();
    this.hubConnection.start().then(() => {
      console.log('WebSocket for Alarms connected');
    });

  }
}
