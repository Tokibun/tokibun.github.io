import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstName = "M I C H E L L E";
  lastName = "K E E";
  scrollContent = "· developer · gamer · musician ";

  constructor(private router: Router) {

  }

  onClick(): void {
    this.router.navigate(["/about"]);
  }
}
