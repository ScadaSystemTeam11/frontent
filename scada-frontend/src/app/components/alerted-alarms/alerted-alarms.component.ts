import { ChangeDetectorRef, Component } from '@angular/core';
import { AlarmAlert } from 'src/app/models/Alarm';
import { AlarmService } from 'src/app/services/alarm.service';

@Component({
  selector: 'app-alerted-alarms',
  templateUrl: './alerted-alarms.component.html',
  styleUrls: ['./alerted-alarms.component.css']
})
export class AlertedAlarmsComponent {
  alarmAlerts : any[] = [];
  
  public constructor(private alarmService: AlarmService, private cdRef: ChangeDetectorRef){
    console.log("uuuuu")
    this.subscribeToAlarmAlerted();
  }

  subscribeToAlarmAlerted() {
    console.log("It should be created")
    this.alarmService.hubConnection.on('AlarmAlerted', (data: any) => {    
      console.log(data)  
      const alarmAlertObj = JSON.parse(data);
      this.alarmAlerts.unshift(alarmAlertObj);
      this.cdRef.detectChanges();
    });
  }
  

}
