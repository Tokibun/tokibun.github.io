import { Component, OnInit } from '@angular/core';
import Typed from "typed.js";

@Component ({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const options = {
          strings: ['developer', 'musician', 'student', 'gamer'],
          typeSpeed: 50,
          backSpeed: 20,
          backDelay: 2000,
          showCursor: true,
          cursorChar: '|',
          loop: true
      };
      const typed = new Typed('#typed-element', options);
  }

}
