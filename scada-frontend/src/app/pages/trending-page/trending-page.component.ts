import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent {
  routeName : string;
  title : string = "title";


  constructor(private route: ActivatedRoute){
    this.routeName = this.route.snapshot.routeConfig?.path || "";
    if(this.routeName == "trending"){
      this.title = "Trending:"
    }
  }
}
