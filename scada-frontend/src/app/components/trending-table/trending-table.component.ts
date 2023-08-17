import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Tag } from 'src/app/models/Tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-trending-table',
  templateUrl: './trending-table.component.html',
  styleUrls: ['./trending-table.component.css']
})
export class TrendingTableComponent {
  tags : Tag[] = [];
  
  public constructor(private router: Router,private tagService: TagService, private authenticationService:AuthenticationService){
    this.tagService.getActiveInputs().subscribe((res) =>{
      this.tags = res;
    });;
    

  }
}
