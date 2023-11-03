import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IExperience } from './experience';
import { Subscription } from 'rxjs';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnDestroy{
  experiences: IExperience[] = [];
  sub!: Subscription;
  errorMessage: string = "";

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.sub = this.experienceService.getProjects().subscribe({
      next: experiences => this.experiences = experiences,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
