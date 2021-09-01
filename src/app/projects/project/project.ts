import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'project-component',
    template: `
    <p>
      project works
        {{project.name}}
        {{project.time}}
        <a href="{{project.link}}">link</a>
    </p>
  `,
    styles: [
    ]
})
export class ProjectComponent implements OnInit {
    @Input() project:
        { name: string; time: string; details: string; tech: string; img: string; link: string} = {name: "", time: "", details: "", tech: "", img: "", link: "https://tokibun.github.io/projects"};
    constructor() { }

    ngOnInit(): void {
    }

}
