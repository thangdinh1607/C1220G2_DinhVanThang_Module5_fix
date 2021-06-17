import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vote';
  count: number;
  choose: number = 0;
  cssString1: string = '';
  cssString2: string = '';
  cssString3: string = '';
  cssString4: string = '';
  cssString5: string = '';
  choose1() {
    this.choose = 1;
    this.cssString1 = 'colorRed';
    this.cssString2 = '';
    this.cssString3 = '';
    this.cssString4 = '';
    this.cssString5 = '';
  }

  choose2() {
    this.choose = 2;
    this.cssString1 = 'colorRed';
    this.cssString2 = 'colorRed';
    this.cssString3 = '';
    this.cssString4 = '';
    this.cssString5 = '';
  }
  choose3() {
    this.choose = 3;
    this.cssString1 = 'colorRed';
    this.cssString2 = 'colorRed';
    this.cssString3 = 'colorYellow';
    this.cssString4 = '';
    this.cssString5 = '';

  }
  choose4() {
    this.choose = 4;
    this.cssString1 = 'colorRed';
    this.cssString2 = 'colorRed';
    this.cssString3 = 'colorYellow';
    this.cssString4 = 'colorYellow';
    this.cssString5 = '';
  }
  choose5() {
    this.choose = 5;
    this.cssString1 = 'colorRed';
    this.cssString2 = 'colorRed';
    this.cssString3 = 'colorYellow';
    this.cssString4 = 'colorYellow';
    this.cssString5 = 'colorGreen';
  }
}
