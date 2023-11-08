import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProject } from './models/project';
import { ProjectService } from './services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: IProject[] = [];
  sub!: Subscription;
  errorMessage: string = "";

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.sub = this.projectService.getProjects().subscribe({
      next: projects => this.projects = projects,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
