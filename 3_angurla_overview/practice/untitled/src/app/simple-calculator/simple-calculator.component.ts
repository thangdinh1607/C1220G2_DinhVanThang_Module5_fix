import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
number1 :number = 0;
number2 :number = 0;
result :number= 0;
color :string ;

  constructor() { }

  ngOnInit(): void {
  }

  changeNumber1($event: any) {
    this.number1 = $event.target.value;
  }
  changeNumber2($event: any) {
    this.number2 = $event.target.value;
  }
  subtraction(): void {
    this.result = Number( this.number1 ) - Number(this.number2);
    this.number1 = 0;
    this.number2 = 0;
  }

  addition() {
    this.result = Number( this.number1 ) + Number(this.number2);
    this.number1 = 0;
    this.number2 = 0;
  }

  multiplication() {
    this.result = Number( this.number1 ) * Number(this.number2);
    this.number1 = 0;
    this.number2 = 0;
  }

  division() {
    this.result = Number( this.number1 ) / Number(this.number2);
    this.number1 = 0;
    this.number2 = 0;
  }

  changeColor($event: any) {
    this.color = $event.target.value;
  }
}
