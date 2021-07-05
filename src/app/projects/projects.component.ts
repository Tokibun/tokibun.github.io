import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="container">
      <div class = "columns is-multiline">
        <div class="column is-12">
          <h2 class="title has-text-centered">My Work</h2>
        </div>
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <img src="assets/img/rabbit.png">
              <p class="project-title">tokibun.github.io</p>
              <p class="date">March 2020-Present</p>
              <p class="subtitle">This very page; A personal portfolio website made with Angular and Bulma. The older version of this page was made with pure HTML and CSS.</p>
                <p class="tech">(Angular, Bulma, HTML, CSS)</p>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/Tokibun/Tokibun.github.io" class="button is-primary is-light" >Link to Project</a>
            </footer>
          </div>
        </div>
        
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <img src="assets/img/doodleJump.PNG">
              <p class="project-title">Doodle Jump</p>
              <p class="date">November-December 2020</p>
              <p class="subtitle">A 2 player version of the game Doodle Jump made with MIPS Assembly.</p>
                <p class="tech">(MIPS Assembly)</p>
            </div>
            <footer class="card-footer">
              <a href="https://github.com/Tokibun/DoodleJump" class="button is-primary is-light" >Link to Project</a>
            </footer>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <div class="card-content">
                <img src="assets/img/fanlinc.png">
              <p class="project-title">Fanlinc</p>
              <p class="date">October-December 2019</p>
              <p class="subtitle"> Social platform for people in Fandoms to connect and to plan events. Worked on both front-end and back-end
                  components in a team of 5. </p>
              <p class="tech">(React, TypeScript, Spring, MondgoDB)</p>
            </div>
            <div class="card-footer">
                <a href="https://drive.google.com/file/d/1IfNKnPHCYKcDTWEM8FATX2nqZGpkT-Kq/view?usp=sharing" class="button is-primary is-light" >Link to Demo</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `,
  styles: [`
      .card {
          height: 100%;
          display:flex;
          flex-direction: column;
          background-color: #EFF8FF;
      }
      .card-footer { 
          margin-top: auto;
      }
      .container{
        padding: 50px;
      }
      
      img{
          height: 10vh;
          width: 10vh;
      }
      
      .project-title{
          color: #fd6a89 ;
          font-family: 'Kaushan Script', sans-serif ;
          font-size: 1.6rem;
      }
      
      .subtitle{
          color: #005A8D;
          font-family: 'Kaushan Script', sans-serif;
          font-size: 1rem;
      }
      
      .title{
          color: #022E57 ;
      }
      
      .tech{
          font-family: 'Kaushan Script', sans-serif;
          font-size: 0.9rem;
      }
      
      .date{
          color: #022E57 ;
          font-family: 'Kaushan Script', sans-serif;
          font-size: 1rem;
      }
  `]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
