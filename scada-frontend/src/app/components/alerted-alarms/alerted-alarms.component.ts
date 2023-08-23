import { ChangeDetectorRef, Component } from '@angular/core';
import { AlarmAlert } from 'src/app/models/Alarm';
import { AlarmService } from 'src/app/services/alarm.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-alerted-alarms',
  templateUrl: './alerted-alarms.component.html',
  styleUrls: ['./alerted-alarms.component.css']
})
export class AlertedAlarmsComponent {
  alarmAlerts : any[] = [];
  
  public constructor(private reportService : ReportService, private alarmService: AlarmService, private cdRef: ChangeDetectorRef){
    this.getRecentAlarms();
    this.subscribeToAlarmAlerted();
  }

  subscribeToAlarmAlerted() {
    this.alarmService.hubConnection.on('AlarmAlerted', (data: any) => {    
      const alarmAlertObj = JSON.parse(data);
      this.alarmAlerts.unshift(alarmAlertObj);
      this.cdRef.detectChanges();
    });
  }
  
  getRecentAlarms(){
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    this.reportService.getDateRangeAlarmReport(yesterday, today).subscribe((res) =>{
      console.log(res);
      this.alarmAlerts = res;
    })
  }

  isUpercase(alarm : any){
    if(alarm.Alarm != undefined) return true;
    else return false;
  }

}
