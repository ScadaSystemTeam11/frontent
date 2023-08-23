import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alarms-page',
  templateUrl: './alarms-page.component.html',
  styleUrls: ['./alarms-page.component.css']
})
export class AlarmsPageComponent {
  routeName : string;
  title : string = "title";


  constructor(private route: ActivatedRoute){
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "alarms"){
      this.title = "Alarms:"
    }
  }
}
