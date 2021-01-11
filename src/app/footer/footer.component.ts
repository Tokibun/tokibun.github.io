import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `      
    <footer class="footer">
      <div class = "container content has-text-centered">
        <p class="subtitle">Michelle Kee</p>
        <p>michelle.kee@mail.utoronto.ca</p>
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li>
                <a>LinkedIn</a>
              </li>
              <li>
                <a>Github</a>
              </li>
              <li>
                <a>Email</a>
            </ul>
          </div>
        </nav>
      </div>
    </footer>

  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
