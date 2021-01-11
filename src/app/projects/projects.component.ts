import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="container">
      <div class = "columns is-multiline">
        <div class="column is-12">
          <h2 class="title has-text-centered">Projects</h2>
        </div>
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <img src="assets/img/bunnyIcon.png">
              <p class="title">tokibun.github.io</p>
              <p>March 2020-Present</p>
              <p class="subtitle">This very page; A personal portfolio website made with Angular and Bulma. The older version of this page was made with pure HTML and CSS.</p>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/Tokibun/Tokibun.github.io" class="button is-primary is-light" >Link to Project</a>
            </footer>
          </div>
        </div>
        
        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              <img src="assets/img/doodleJump.PNG">
              <p class="title">Doodle Jump</p>
              <p>November-December 2020</p>
              <p class="subtitle">A 2 player version of the game Doodle Jump made with MIPS Assembly.</p>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/Tokibun/DoodleJump" class="button is-primary is-light" >Link to Project</a>
            </footer>
          </div>
        </div>

        <div class="column is-6">
          <div class="card">
            <div class="card-content">
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `,
  styles: [`      
      .container{
        padding: 100px;
      }
  `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
