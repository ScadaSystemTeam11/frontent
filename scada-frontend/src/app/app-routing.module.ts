import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path:'login', component: LandingPageComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**',  redirectTo: '/login'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
