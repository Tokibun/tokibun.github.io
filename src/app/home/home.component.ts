import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class = "main-page">
            <h1 class = "title">hey,</h1>
            <h1 class = "title">i'm <span class="my-name">michelle kee</span>!</h1>
            <h1></h1>
            <h1 class = "subtitle"><i class="fas fa-terminal"></i> developer</h1>
    </div>
  `,
  styles: [`
      .main-page {
          padding: 5vh;
          padding-bottom: 55vh;
          background-color: #FFF5FD;
          /*height: 85vh;*/
      }
      .title {
        font-family: 'Kaushan Script', sans-serif;
        /*transform: rotate(-3deg);*/
        font-size: 4rem;
        color: #022E57;
      }
      
      .subtitle {
          font-family: 'Kaushan Script', sans-serif;
          font-size: 2rem;
          color: #005A8D;
      }
      
      .my-name {
          color: #FF96AD;
      }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
