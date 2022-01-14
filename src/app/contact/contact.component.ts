import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../../../node_modules/bulma']
})
export class ContactComponent implements OnInit {
  name: string="";
  email: string="";
  message: string="";

  constructor() {

   }

  ngOnInit(): void {
  }
  submitForm()
  {
    const message = `My name is ${this.name}`;
    alert(message)
  }
}
