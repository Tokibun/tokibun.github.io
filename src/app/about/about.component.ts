import {Component, OnInit} from '@angular/core';


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
                        <p class="intro">I have graduated from the
                            <a class="highlight" href="https://www.utsc.utoronto.ca/home/">
                                <i class="fas fa-graduation-cap"></i>
                                University of Toronto</a> with HBSc in Computer Science.
                            I aim to develop tools and software that can improve quality of life.
                            <br/>
<!--                            I am currently working as a <a class="highlight" href="https://www.hootsuite.com/">-->
<!--                                <i class="fas fa-briefcase highlight"></i> Software Developer @ Hootsuite</a>.-->
                        </p>
                        <br/>

                        <p class="intro">I've previously worked as:</p>
                        <ul class="intro fa-ul">

                            <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                                Teaching Assistant @ <a class="intro"
                                                        href="https://www.utoronto.ca/">University of Toronto</a>
                                <br/>
                                <div class="smaller">Sept 2022 - Dec 2022</div>
                            </li>

                            <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                                Software Developer @ <a class="intro"
                                                        href="https://www.hootsuite.com/en-gb">Hootsuite</a>
                                <br/>
                                <div class="smaller">Jan 2022 - Sep 2022</div>
                            </li>

                            <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                                Software Developer @ <a class="intro"
                                                        href="https://www.cibc.com/en/personal-banking.html">CIBC</a>
                                <br/>
                                <div class="smaller">May 2021 - Aug 2021</div>
                            </li>

                            <li>
                                <span class="fa-li">
                                <i class="fas fa-briefcase highlight"></i>
                                </span>
                                Application Developer @ <a class="intro"
                                                           href="https://www.cibc.com/en/personal-banking.html">CIBC</a>
                                <br/>
                                <div class="smaller">Jan 2020 - June 2020</div>
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
                                Mentor @ <a class="intro" href="https://linktr.ee/wicsm.utsc">WiCSM</a>
                                <br/>
                                <div class="smaller">Sept 2020 - Apr 2021</div>
                            </li>


                        </ul>
                        <br/>
                        <p class="intro">I am currently seeking full-time opportunities.</p>
                        <br/>
                        <a href="assets/file/ResumeSept29.pdf" download="MichelleKee.Resume.pdf" class="intro"><i
                                class="fas fa-download highlight"></i> Download my resume!</a>


                    </div>

                    <div class="column is-half ">
                        <img class="michelle " src="/assets/img/michelle3.jpg"/>
                    </div>

                </div>
            </div>
        </div>


    `,
    styles: [`
        ul {
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

        .smaller {
            font-size: 1rem;
        }
    `
    ]
})
export class AboutComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
