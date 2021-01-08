import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight-with-navbar is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title has-text-centered">
            Michelle Kee
          </p>
          <p class="has-text-centered">Computer Science Specialist Student at University of Toronto</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
      .hero {
        background-image: url("assets/img/sky.jpg") !important;
        baground-size: cover;
        background-position: center center;
      ;
      } 
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
