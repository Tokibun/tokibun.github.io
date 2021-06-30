import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!--Header-->
    <nav class="navbar is-transparent is-fixed-top">
      <!--Logo-->
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/">
          MICHELLE KEE
        </a>
        <a (click)="toggleNavbar()" role="button" class="navbar-burger" data-target="navbarExampleTransparentExample" aria-label="menu" aria-expanded="false" #navBurger>
          <span ></span>
          <span></span>
          <span></span>
        </a>
      </div>
     
      <!-- menu -->
      <div id="navbarExampleTransparentExample" class="navbar-menu" #navMenu >
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/about">About</a>
<!--          <a class="navbar-item" routerLink="/resume">Resume</a>-->
          <a class="navbar-item" routerLink="/projects">Projects</a>
<!--          <a class="navbar-item" routerLink="/contact">Contact</a>-->
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
  `,
  styles: [`
      .navbar{
          background-color: #FFF5FD;
          height: 5vh;
      }
  
  `
  ]
})


export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
