import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public name:string='';
  public age:number=0;
  public company:string='';
  public package:number=0;


  public employees:Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }
add()
{
  this.employees.push({
  'name': this.name,
  'package':this.package,
  'age':this.age,
  'company':this.company
  }
  );
}
delete(i:number){
  this.employees.splice(i,1)
}
packageLowToHigh(){
  this.employees = this.employees.sort((a,b) => a.package-b.package);
}
packageHighToLow(){
  this.employees = this.employees.sort((a,b) => b.package-a.package);
}
clear(){
  this.employees = [];
}
}
