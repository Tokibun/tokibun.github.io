import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: "full" },
  { path: 'home', component: HomeComponent, data: {animationState: 'Home'} },
  { path: '', component: ContentPageComponent, children: [
    { path: 'about', component: AboutComponent, data: {animationState: 'About'}},
    { path: 'portfolio', component: PortfolioComponent, data: {animationState: 'Portfolio'}},
    { path: 'resume', component: ResumeComponent, data: {animationState: 'Resume'}},
  ]},
  { path: '**', redirectTo: 'about', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
