import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlarmDTO } from '../models/Alarm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  api : string = `${environment.api}/alarm`
   hubConnection: HubConnection;


  constructor(private http: HttpClient) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5022/alarmAlertedHub')
      .build();
    this.hubConnection.start().then(() => {
      console.log('WebSocket for Alarms connected');
    });
  }

  deleteAlarm(id : string){
    return this.http.delete(this.api + `/RemoveAlarm?id=${id}`);
  }

  createAlarm(dto: AlarmDTO){
    return this.http.post(this.api + '/AddAlarm', dto);
  }
}
