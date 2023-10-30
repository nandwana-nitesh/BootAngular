import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  submitted =false;
  hero:Hero;
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  constructor(){
    this.hero =  new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  }
  onSubmit(){
    alert("submiited");
    console.info("submitted");
    this.submitted = true;
  }

  newHero() {
    this.hero = new Hero(42, '', '');
  }
}
