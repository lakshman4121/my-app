import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registation',
  templateUrl: './event-registation.component.html',
  styleUrls: ['./event-registation.component.css']
})
export class EventRegistationComponent implements OnInit {

  public name :string ='';

  public names:string[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.names.push ( this.name);
  }
  delete(){
    this.names.pop();
  }
  deleteAll(){
    this.names=[];
  }
  deleteEach(i:number){
    this.names.splice(i,1);
  }
  reverse(){
    this.names.reverse();
  }



}
