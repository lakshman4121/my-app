import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  public number1: number = 0;
  public number2: number = 0;

  public result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sum(){
    this.result =this.number1 + this.number2
  }
  sub(){
    this.result =this.number1 - this.number2
  }
  mult(){
    this.result =this.number1 * this.number2
  }
  div(){
    this.result =this.number1 / this.number2
  }
  

}
