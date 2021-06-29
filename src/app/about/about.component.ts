import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
      <div class="about">
    <div class="container">
      <div class="column-is-12">
        <h1 class="title has-text-centered section-title">About Me</h1>
      </div>
      <div class="columns is-multiline ">
          
        <div class="column is-half has-vertically-aligned-content">
          <p class="is-larger"><strong>I'm Michelle</strong></p>
          <br/>
          <p>I am currently a 4th year student at the University of Toronto. I enjoy learning new technologies and tools to create a variety of programs.</p>
          <br/>
          <p>Seeking for co-op opportunities for Fall 2021/Winter 2022</p> 
        </div>
          
        <div class="column is-half ">
          <img class="michelle is-rounded" src="/assets/img/michelle2.JPG"/>
        </div>
          
      </div>
    </div>
      </div>
      

  `,
  styles: [`
      .michelle{
          max-width: 40vh;
          max-height: 40vh;
      }
      .container{
        padding: 50px;
          
      }
      .title{
        padding-bottom:50px;
      }
      
      .about {
          background-color: #FFF5FD;
          /*height: 85vh;*/
      }
  `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
