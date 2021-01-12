import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
      <div class="skills">
    <div class=" container">
      <div class="columns is-multiline">
        <div class="column is-12"><h1 class="title has-text-centered ">Skills</h1></div>
        <div class="column is-4 has-text-centered">
            Languages
            <hr/>
            <h2>HTML, CSS, Java, C, C#, Python, Typescript</h2>
        </div>
        <div class="column is-4 has-text-centered">
            Frameworks
            <hr/>
            <h2>Angular, React, Spring, Bulma</h2>
        </div>
        <div class="column is-4 has-text-centered">
          Database
          <hr/>
          <h2>MongoDB, Neo4j</h2>
        </div>
      </div>
    </div>
      </div>
    
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1 class="title has-text-centered">Education</h1>
        </div>
        <div class="column is-4">
          <figure class="image is-128x128">
            <img src="assets/img/uoft.jpg">
          </figure>
        </div>
        <div class="column is-8">
          <p>University of Toronto (2018-2023)<br/>Honours Bachelor of Science<br/>
          Specialist (Co-op) Program in Computer Science - Software Engineering Stream</p>
        </div>
      </div>
    </div>

      <div class="resume">
    <div class=" container">
      <div class="columns is-multiline">
        <div class="column is-12 about-me">
          <h1 class="title has-text-centered section-title">
            View My Resume
          </h1>
        </div>
        <div class="column is-10 has-text-centered is-offset-1">
          <h2 class="subtitle">
            <!--              Optional text for future if needed-->
          </h2>
          <form action="example.docs">
            <a href="assets/file/ResumeJan11.pdf" download="MichelleKee.Resume.pdf" class="button">Download</a>
          </form>
        </div>
      </div>
    </div>
      </div>
  `,
  styles: [`
    /*.title {*/
    /*  font-family: 'Kaushan Script', sans-serif;*/
    /*  font-size: 2rem;*/
    /*  color: black;*/
    /*  padding: 10px;*/
    /*}*/
    .container{
      padding: 50px;
    }
    .skills{
      background-color: #43485c;
      color: white;
    }
    .skills .title{
      color: white;
    }
    .subtitle {
      padding: 5px;
      color: whitesmoke;
    }
    .resume{
      background-color: #f0f3f5;
    }
  `
  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
