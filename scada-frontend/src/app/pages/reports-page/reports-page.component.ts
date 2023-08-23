import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent {
  routeName : string;
  title : string = "title";


  constructor(private route: ActivatedRoute){
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "reports"){
      this.title = "Reports:"
    }
  }
}
