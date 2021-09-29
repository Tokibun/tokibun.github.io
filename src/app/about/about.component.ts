import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
      <div class="about">
          <div class="container">
              <div class="column-is-12">
                  <h1 class="title has-text-centered section-title">Nice to meet you!</h1>
              </div>
              <div class="columns is-multiline ">

                  <div class="column is-half has-vertically-aligned-content">
                      <p class=" intro-title">I'm Michelle</p>
                      <br/>
                      <p class="intro">I am a 4th year CS student at the 
                          <a class="highlight" href="https://www.utsc.utoronto.ca/home/">
                              <i class="fas fa-graduation-cap"></i> 
                              University of Toronto</a>.
                          I aim to develop tools and software that can make people happy.</p>
                      <br/>

                      <p class="intro">I've previously worked as:</p>
                      <ul class="intro fa-ul">
                          
                          <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                              Software Developer @ <a class="intro" href="https://www.cibc.com/en/personal-banking.html">CIBC</a>
                              <br/>
                              <div class="smaller">May - Aug 2021</div>
                          </li>
                          
                          <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                              Application Developer @ <a class="intro" href="https://www.cibc.com/en/personal-banking.html">CIBC</a>
                              <br/>
                              <div class="smaller">Jan - June 2020</div>
                          </li>
                          
                          <li>
                                <span class="fa-li">
                                <i class="fas fa-hands-helping highlight"></i>
                                </span>
                              IT Consultant @ <a class="intro" href="https://meioatuoft.github.io/">MEIO</a>
                              <br/>
                              <div class="smaller">Feb 2021 - Apr 2021</div>
                          </li>

                          <li>
                                <span class="fa-li">
                                <i class="fas fa-hands-helping highlight"></i>
                                </span>
                              Mentor @ <a class="intro" href="https://wicsm.ca/">WiCSM</a>
                              <br/>
                              <div class="smaller">Sep 2020 - Apr 2021</div>
                          </li>
                          
                          
                      </ul>
                      <br />
                      <p class="intro">Seeking co-op opportunities for Fall 2021/Winter 2022</p>
                      <br/>
                      <a href="assets/file/ResumeSept29.pdf" download="MichelleKee.Resume.pdf" class="intro"><i class="fas fa-download highlight"></i> Download my resume!</a>


                  </div>

                  <div class="column is-half ">
                      <img class="michelle " src="/assets/img/michelle2.JPG"/>
                  </div>

              </div>
          </div>
      </div>


  `,
  styles: [`
      ul{
          margin-left: 40px;
      }
      .intro-title {
          color: #022E57;
          font-family: 'Kaushan Script', sans-serif;
          font-size: 3rem;
      }

      .intro {
          color: #005A8D;
          font-family: 'Kaushan Script', sans-serif;
          font-size: 1.2rem;

      }

      .michelle {
          max-width: 40vh;
          max-height: 40vh
      }

      .container {
          padding: 50px;

      }

      .title {
          padding-bottom: 50px;
      }

      .about {
          background-color: #FFF5FD;
          padding-bottom: 25vh;
          /*height: 85vh;*/
      }

      .highlight {
          color: #fd6a89;
      }
      
      .smaller{
          font-size: 1rem;
      }
  `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
