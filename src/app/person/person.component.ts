import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public Persons:Person[]= [];

  constructor(private _personService:PersonService) {
    this._personService.getPerson().subscribe(
      (data:any) =>{
        this.Persons=data;
      },
      (err:any) =>{
        alert('Internal server error');
      }
    )
   }

  ngOnInit(): void {
  }

}
