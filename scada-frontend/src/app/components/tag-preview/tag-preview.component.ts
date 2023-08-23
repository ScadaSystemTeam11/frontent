import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag, TagType } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent {
  tag: any;
  tagType : TagType;

  constructor(private tagService : TagService, @Inject(MAT_DIALOG_DATA) public data: Tag){
    console.log(data);
    this.tag = data;
    this.tagType = this.tagService.getTagType(this.tag);
  }
}
