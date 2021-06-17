import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://mediacloud.kiplinger.com/image/private/s--zFDKjwc_--/f_auto,t_primary-image-desktop@1/v1584618177/slideshow/investing/T052-S001-the-9-best-pure-bred-pet-stocks-to-buy/images/intro.jpg'
  };
  size = 200;

  constructor() {
  }

  ngOnInit(): void {
  }

  sizeImage($event: any) {
    this.size = $event.target.value;
  }
}
