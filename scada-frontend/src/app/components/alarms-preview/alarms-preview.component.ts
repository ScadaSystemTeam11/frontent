import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Alarm } from 'src/app/models/Alarm';
import { AnalogInput, Tag } from 'src/app/models/Tag';
import { AlarmService } from 'src/app/services/alarm.service';
import { TagService } from 'src/app/services/tag.service';
import { CreateTagComponent } from '../create-tag/create-tag.component';
import { CreateAlarmComponent } from '../create-alarm/create-alarm.component';

@Component({
  selector: 'app-alarms-preview',
  templateUrl: './alarms-preview.component.html',
  styleUrls: ['./alarms-preview.component.css']
})
export class AlarmsPreviewComponent {
  tag: AnalogInput;

  constructor(public dialog: MatDialog, private alarmService : AlarmService,  @Inject(MAT_DIALOG_DATA) public data: AnalogInput){
    this.tag = data;
  }

  openCreateAlarm(){  
    this.dialog.open(CreateAlarmComponent, {
      data: this.tag,
      width: "550px"
    });
  }
  
  deleteAlarm(alarm: Alarm){
    this.alarmService.deleteAlarm(alarm.id).subscribe((res)=>{
      console.log(res);
    })
  }

}
