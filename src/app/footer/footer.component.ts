import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<!--    <footer class="footer">-->
<!--      <div class = "container content has-text-centered">-->
<!--        <p class="subtitle">Michelle Kee</p>-->
<!--        <p>michelle.kee@mail.utoronto.ca</p>-->
<!--        <nav class="tabs is-boxed is-fullwidth">-->
<!--          <div class="container">-->
<!--              <ul>-->
<!--              <li>-->
<!--                <a href="https://github.com/Tokibun">-->
<!--                  <figure class="image is-48x48">-->
<!--                    <img src="assets/img/GitHub-Mark-64px.png">-->
<!--                  </figure>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="https://www.linkedin.com/in/mkee/">-->
<!--                <figure class="image is-48x48">-->
<!--                    <img src="assets/img/LI-In-Bug.png" >-->
<!--                </figure>-->
<!--                </a>-->
<!--              </li>-->
<!--              -->
<!--            </ul>-->
<!--          </div>-->
<!--        </nav>-->
<!--      </div>-->
<!--    </footer>-->
      <div class="footer">
          <a class="icon" href="https://www.linkedin.com/in/mkee/"> <i class="fab fa-linkedin fa-3x"></i> </a>
          <a class="icon" href="https://github.com/Tokibun"> <i class="fab fa-github fa-3x"></i></a>
          <a class="icon" href="mailto:michelle.kee@mail.utoronto.ca"><i class="fas fa-envelope fa-3x"></i></a>
      </div>

  `,
  styles: [`
      .footer {
          background-color: #FFF5FD;
          height: 5vh;
      }
      
      .icon {
          color: inherit;
          padding: 45px;
      }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
