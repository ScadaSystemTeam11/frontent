import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent {
  routeName : string;
  title : string = "title";


  constructor(private route: ActivatedRoute){
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "database"){
      this.title = "Tags:"
    }
  }
}
