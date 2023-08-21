import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagService } from 'src/app/services/tag.service';
import { Tag, TagType } from 'src/app/models/Tag';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


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
  ioAddress : string = "";
  driver : string = "";
  scanTime : number = 0;
  lowLimit : number = 0;
  highLimit : number = 0;
  units : string = "";
  initialValue : number = 0;
  ioOptions : string[]


  constructor(private tagService : TagService, @Inject(MAT_DIALOG_DATA) public data: string){
    this.ioOptions = ["C", "S", "R"];
    this.tagType = data;
  }

  createTag(){

  }

}
