import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag, TagType } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent {
  tag: Tag;

  constructor(private tagService : TagService, @Inject(MAT_DIALOG_DATA) public data: Tag){
    console.log(data);
    this.tag = data;
  }

  delete(){
    const tagType = this.tagService.getTagType(this.tag)
    switch(tagType){
      case TagType.AnalogInput:
        console.log("Deleting analog input");
        this.tagService.deleteAnalogInput(this.tag.id).subscribe((res) =>{
          console.log(res);
        });
        break;
      case TagType.AnalogOutput:
        console.log("Deleting analog output");
        this.tagService.deleteAnalogOutput(this.tag.id).subscribe((res) =>{
          console.log(res);
        });
        break;
      case TagType.DigitalInput:
        console.log("Deleting digital input");
        this.tagService.deleteDigitalInput(this.tag.id).subscribe((res) =>{
          console.log(res);
        });
        break;
      case TagType.DigitalOutput:
        console.log("Deleting digital output");
        this.tagService.deleteDigitalOutput(this.tag.id).subscribe((res) =>{
          console.log(res);
        });
        break;
    }
  }
}
