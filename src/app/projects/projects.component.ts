import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
     
    <div class="container">
      <div class = "columns is-multiline">
        <div class="column is-12">
          <h2 class="title has-text-centered">My Work</h2>
        </div>
          <div class="column is-4" *ngFor="let p of projects">
              <project-component [project]='p'></project-component>
          </div>
          
      </div>
      
    </div>
  `,
  styles: [`

      .container{
        padding: 50px;
      }
      
      img{
          height: 10vh;
          width: 10vh;
      }
      
      
      .title{
          color: #022E57 ;
      }
      
  `]
})
export class ProjectsComponent implements OnInit {
    //Projects data here
    projects = [
        {
            name: 'Interwined',
            time:'Sept 2021-Present',
            details:'Worked in a large team with art and music students to create a single player puzzle game about a boy and a dog with separation anxiety who has to make their way back home.',
            tech: "C#, Unity",
            img: "assets/img/intertwinedDog.jpg",
            link: "https://meshflakes.itch.io/intertwined"},
        {
            name: 'PintOS',
            time:'January-April 2021',
            details:'Worked in a team of 3 to implement kernel threads, user programs, virtual memory, and file systems support to the open-source operating system PintOS.',
            tech: "C, Docker, GDB",
            img: "assets/img/PintOS.png",
            link: "https://github.com/CSCC69/project-turtles"},
        {
            name: 'tokibun.github.io',
            time:'March 2020-Present',
            details:'This very page; A personal portfolio website made with Angular and Bulma. The older version of this page was made with pure HTML and CSS.',
            tech: "Angular, Bulma, HTML, CSS",
            img: "assets/img/rabbit.png",
            link: "https://github.com/Tokibun/Tokibun.github.io"},
        {
            name: 'Doodle Jump',
            time:'November-December 2020',
            details:'A 2 player version of the game Doodle Jump made with MIPS Assembly.',
            tech: "MIPS Assembly",
            img: "assets/img/doodleJump.PNG",
            link: "https://github.com/Tokibun/DoodleJump"},
        {
            name: 'Fanlinc',
            time:'October-December 2019',
            details:'Social platform for people in Fandoms to connect and to plan events. Worked on both front-end and back-end components in a team of 5.',
            tech: "React, TypeScript, Spring, MondgoDB",
            img: "assets/img/fanlinc.png",
            link: "https://drive.google.com/file/d/1IfNKnPHCYKcDTWEM8FATX2nqZGpkT-Kq/view?usp=sharing"},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
