import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  aboutSelected = false;
  portfolioSelected = false;
  resumeSelected = false;
  @Input() selectedItem!: string;

  ngOnInit(): void {
    if (this.selectedItem == "about") this.aboutSelected = true;
    else if (this.selectedItem == "portfolio") this.portfolioSelected = true;
    else if (this.selectedItem == "resume") this.resumeSelected = true;
  }
}
