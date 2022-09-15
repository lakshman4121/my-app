import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public age:number= 22;
  public name:string= "kunal"
  public isIndian: boolean = true;

  public phones: number[] =[ 1234,4567,8901];
  public courses: string[] =['angular','react'];

 // object Interpolation
 public user:User = {name:'kunal',city:'taxies'};

 public student:Student = {
  name:'kunal',
  id:'N123',
  marks:99
 };

 public employee:Employee = {
  name:'kunal',
  company:'wipro',
  package:100000
 };
//array of objects interpolation
public users:User[] =
[
  {name:'kunal',city:'taxies'},
  {name:'lakshman',city:'bbsr'},
  {name:'ram',city:'hyd'},
  {name:'pream',city:'delhi'}

];
public students: Student[] =
[
  {name:'anil', id:'M123', marks:90 },
  {name:'kunal', id:'M124', marks:80 },
  {name:'ram', id:'M125', marks:70 }
  
];




  constructor() { }

  ngOnInit(): void {
  }

}
