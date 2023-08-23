import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlarmDTO } from 'src/app/models/Alarm';
import { AlarmService } from 'src/app/services/alarm.service';

@Component({
  selector: 'app-create-alarm',
  templateUrl: './create-alarm.component.html',
  styleUrls: ['./create-alarm.component.css']
})
export class CreateAlarmComponent {
  tag : any
  alarmPriority : number = 0;
  alarmType : number = 0;
  valueLimit : number = 0;

  constructor(private alarmService : AlarmService, @Inject(MAT_DIALOG_DATA) public data: any){
    this.tag = data;
  }


  createAlarm(){
    const alarm = new AlarmDTO(this.valueLimit, this.alarmType, this.alarmPriority, this.tag.id, this.tag.units)
    this.alarmService.createAlarm(alarm).subscribe((res)=>{
      console.log(res);
    });
  }
}
