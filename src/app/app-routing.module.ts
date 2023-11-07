import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animationState: 'Home'} },
  { path: 'menu', component: HomeMenuComponent },
  { path: 'about', component: AboutComponent, data: {animationState: 'About'}},
  { path: 'portfolio', component: PortfolioComponent, data: {animationState: 'Portfolio'}},
  { path: 'resume', component: ResumeComponent, data: {animationState: 'Resume'}},
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: '**', redirectTo: 'home', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
