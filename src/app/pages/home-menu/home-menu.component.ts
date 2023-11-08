import { Component } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent {
    firstName = "M I C H E L L E";
    lastName = "K E E";
    aboutHovered = false;
    portfolioHovered = false;
    resumeHovered = false;


    // todo: star onclick
    onClick(): void {

    }

}
