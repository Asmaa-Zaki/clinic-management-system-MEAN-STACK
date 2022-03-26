import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Users } from '../Module/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() nUser: Users= new Users(0, "", "", "")
  static active= false
  static current=""
  static currentUser:any

  readonly baseURL= 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  usersList: Users[]= []

  //addToList
  AddToList() {
    return this.http.post(this.baseURL, this.nUser)
  }

  GetList() {
    return this.http.get(this.baseURL)
  }

  DeleteAppoint()
  {
    return this.http.delete(this.baseURL+'/'+this.nUser._id)
  }

  EditAppoint()
  {
      return this.http.put(this.baseURL+`/`+this.nUser._id,this.nUser)
      
  }

}
