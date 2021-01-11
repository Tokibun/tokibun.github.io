import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="column-is-12">
        <h1 class="title has-text-centered section-title">About Me</h1>
      </div>
      <div class="columns is-multiline ">
        <div class="column is-half has-vertically-aligned-content">
          <p class="is-larger"><strong>Hey there, I'm Michelle</strong></p>
          <br/>
          <p>I am currently a 3rd year student at the University of Toronto. I enjoy learning new technologies and tools to create a variety of programs.</p>
          <br/>
          <p>Currently seeking a co-op opportunity for Summer 2021</p> 
        </div>
        <div class="column is-half ">
          <img class="is-rounded" src="/assets/img/duck.jpeg"/>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .container{
        padding: 100px;
      }
  `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
