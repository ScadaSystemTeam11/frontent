import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';


@Component({
  selector: 'app-trending-table',
  templateUrl: './trending-table.component.html',
  styleUrls: ['./trending-table.component.css']
})
export class TrendingTableComponent {
  tags : Tag[] = [];
  
  public constructor(
    private tagService: TagService,
    private cdRef: ChangeDetectorRef){

    this.getActiveInputs();
    this.subscribeToTagValueChanged();
  }

  subscribeToTagValueChanged() {
    this.tagService.hubConnection.on('TagValueChanged', (data: any) => {
      console.log("A change should happen");
      
      const updatedTag = JSON.parse(data);
      const index = this.tags.findIndex(tag => tag.id === updatedTag.ID);
  
      if (index !== -1) {
        this.tags[index].currentValue = updatedTag.CurrentValue;
        this.cdRef.detectChanges();
      }
    });
  }
  

  getActiveInputs(){
    this.tagService.getActiveInputs().subscribe((res) =>{
      this.tags = res;
      console.log(this.tags[0].id);
      this.cdRef.detectChanges();
    });;
  }
}
