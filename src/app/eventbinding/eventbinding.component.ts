import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("submit clicked");
  }
  cancel(){
    alert("cancel double clicked");
  }
  test(){
    alert("key up");
  }
  test2(){
    alert("key down");
  }
  test3(){
    alert("key press");
  }
  test4(){
    alert("mouse enter");
  }
  test5(){
    alert("mouseleave");
  }


}
