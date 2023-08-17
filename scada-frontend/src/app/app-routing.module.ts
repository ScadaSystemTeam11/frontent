import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';

const routes: Routes = [
  {path:'login', component: LandingPageComponent},
  {path:'trending', component: TrendingPageComponent, canActivate: [AuthGuard]},
  {path: '**',  redirectTo: '/login'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
