import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.css']
})
export class SqureComponent implements OnInit {
  public length: number = 0;

  public result: number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result =this.length *  this.length
  }
  perimeter(){
    this.result =this.length*4
  }

}
