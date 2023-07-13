import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="my-page">
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </div>
  `,
  styles: [`
      .my-page{
          background-color: #FFF5FD;
          min-height: 96vh;
      }
  `]
})
export class AppComponent {
  title = 'angular-site';
}
