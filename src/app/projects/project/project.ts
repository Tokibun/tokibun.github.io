import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'project-component',
    template: `
        
            <div class="card">
                <div class="card-content">
                    <img src={{project.img}}>
                    <p class="project-title">{{project.name}}</p>
                    <p class="date">{{project.time}}</p>
                    <p class="subtitle">{{project.details}}</p>
                    <p class="tech">{{project.tech}}</p>
                </div>
                <footer class="card-footer">
                    <a href={{project.link}} class="button is-primary is-light" >Link to Project</a>
                </footer>
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
export class ProjectComponent implements OnInit {
    @Input() project:
        { name: string; time: string; details: string; tech: string; img: string; link: string} = {name: "", time: "", details: "", tech: "", img: "", link: "https://tokibun.github.io/projects"};
    constructor() { }

    ngOnInit(): void {
    }

}
