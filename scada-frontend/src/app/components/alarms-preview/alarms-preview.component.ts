import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alarm } from 'src/app/models/Alarm';
import { AnalogInput, Tag } from 'src/app/models/Tag';
import { AlarmService } from 'src/app/services/alarm.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-alarms-preview',
  templateUrl: './alarms-preview.component.html',
  styleUrls: ['./alarms-preview.component.css']
})
export class AlarmsPreviewComponent {
  tag: AnalogInput;

  constructor(private tagService : TagService, private alarmService : AlarmService,  @Inject(MAT_DIALOG_DATA) public data: AnalogInput){
    this.tag = data;
  }

  openCreateAlarm(){
    
  }
  
  deleteAlarm(alarm: Alarm){

  }

}
