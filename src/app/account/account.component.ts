import { Component, OnInit } from '@angular/core';
import { account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public filterTerm:string ="";
  public column:string= "";
  public order:string = "";
  public account:account[] = [];

  constructor(private _accountServce:AccountService) {
    this._accountServce.getAccounts().subscribe(
      (data:any)=>{
        this.account= data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
   }

  ngOnInit(): void {
  }
  sort(){
    this._accountServce.getSortAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.account= data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  filter(){
    this._accountServce.getfilterAccounts(this.filterTerm).subscribe(
      (data:any)=>{
        this.account= data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
