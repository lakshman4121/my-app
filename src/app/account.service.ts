import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient:HttpClient) { }
  getAccounts():Observable<account[]>{
    return this._httpClient.get<account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }
  getfilterAccounts(filterTerm:string):Observable<account[]>{
    return this._httpClient.get<account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?filter='+filterTerm)
 }
    getSortAccounts(column:string,order:string):Observable<account[]>{
      return this._httpClient.get<account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?sortBy='+column+'&order='+order);
}

}
