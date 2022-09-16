import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    id: new FormControl('',[Validators.required,Validators.min(0),Validators.max(120)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    cards: new FormArray([]),
    paymentType: new FormControl(),
    upiId:new FormControl(),
    cardNo:new FormControl()
    
  })
  
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl('',[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }
  remove(i:number){
    this.cardsFormArray.removeAt(i);
  }
  submit(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }

}
