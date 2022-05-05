import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  readonly server ="https://fakestoreapi.com/users";
 
  constructor(private _Service:HttpClient) {
    
   }
   Getallusers(){
    return this._Service.get(this.server);
  }
  GetUser(id:number){
    return this._Service.get(`${this.server}/${id}`)
  }
}
