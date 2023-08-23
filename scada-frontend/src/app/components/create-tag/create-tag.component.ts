import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagService } from 'src/app/services/tag.service';
import { AnalogInput, AnalogInputDTO, AnalogOutput, AnalogOutputDTO, DigitalInput, DigitalInputDTO, DigitalOutput, DigitalOutputDTO, Tag, TagType } from 'src/app/models/Tag';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent {
  tagType : string;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  name : string = "";
  description : string = "";
  scanTime : number = 0;
  lowLimit : number = 0;
  highLimit : number = 0;
  units : string = "";
  initialValue : number = 0;
  ioOptionsRTU : string[]
  ioOptionsSimulation : string[]
  selectedDriver : string = "";
  selectedIOAddress : string = "";


  constructor(private tagService : TagService, @Inject(MAT_DIALOG_DATA) public data: string){
    this.ioOptionsRTU = ["C", "S", "R"];
    this.ioOptionsSimulation = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    this.tagType = data;
  }

  createTag(){
    if(this.tagType == "AnalogInput"){
      const aiTag = new AnalogInputDTO(uuidv4(), this.name, this.description, this.lowLimit, this.lowLimit,
      this.highLimit, this.units, this.scanTime, this.selectedDriver, this.selectedIOAddress);
      this.tagService.createAnalogInputTag(aiTag).subscribe((res)=>{
        console.log(res);
      });
    }
    if(this.tagType == "AnalogOutput"){
      const aoTag = new AnalogOutputDTO(uuidv4(), this.name, this.description, this.initialValue,
      this.lowLimit, this.highLimit, this.units);
      this.tagService.createAnalogOutputTag(aoTag).subscribe((res)=>{
        console.log(res);
      });
    }
    if(this.tagType == "DigitalInput"){
      const diTag = new DigitalInputDTO(uuidv4(), this.name, this.description,this.scanTime, 0, this.selectedDriver, this.selectedIOAddress);
      console.log(diTag);
      this.tagService.createDigitalInputTag(diTag).subscribe((res)=>{
        console.log(res);
      });
    }
    if(this.tagType == "DigitalOutput"){
      const doTag = new DigitalOutputDTO(uuidv4(), this.name, this.description, this.initialValue);
      console.log(doTag);
      this.tagService.createDigitalOutputTag(doTag).subscribe((res)=>{
        console.log(res);
      });
    }

  }


}
