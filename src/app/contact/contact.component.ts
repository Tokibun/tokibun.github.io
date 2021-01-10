import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Me</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
<!--        Contact Form-->
        <form (ngSubmit)="submitForm()">
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameinput="ngModel" required>
            <div class="help is-error" *ngIf="nameinput.invalid && nameinput.touched">Your name is required.</div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <input type="text" name="email" class="input" [(ngModel)]="email" required #emailinput="ngModel">
            <div class="help is-error" *ngIf="emailinput.invalid && emailinput.touched">Your email is required.</div>
          </div>
          <div class="field">
            <label class="label">Message:</label>
            <textarea name="msg" class="textarea" [(ngModel)]="msg" required #msginput="ngModel"></textarea>
            <div class="help is-error" *ngIf="msginput.invalid && msginput.touched">Message is required.</div>
          </div>
          <button type="submit" class="button is-large is-warning">Submit</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
  .hero{
    background-image: url("assets/img/background.jpeg") !important;
  }`
  ]
})
export class ContactComponent implements OnInit {
  name: string ="";
  email: string ="";
  msg: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.name}`;
    alert(message);
  }

}
