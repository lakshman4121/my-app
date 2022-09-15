import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registation',
  templateUrl: './student-registation.component.html',
  styleUrls: ['./student-registation.component.css']
})
export class StudentRegistationComponent implements OnInit {
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
