import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'project-detail-component',
    templateUrl: 'project-detail.component.html',
    styleUrls: ['project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
    @Input() project:
        { name: string; time: string; details: string; tech: string; img: string; link: string} = {name: "", time: "", details: "", tech: "", img: "", link: "https://tokibun.github.io/projects"};
    constructor() { }

    ngOnInit(): void {
    }

}
