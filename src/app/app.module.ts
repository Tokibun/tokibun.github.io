import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailComponent } from './portfolio/project-detail/project-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './timeline/timeline.component';
import { ContentPageComponent } from './content-page/content-page.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMenuComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    NavbarComponent,
    ProjectDetailComponent,
    TimelineComponent,
    ContentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
