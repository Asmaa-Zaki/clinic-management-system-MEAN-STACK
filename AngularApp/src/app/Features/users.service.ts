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

  readonly baseURL= 'http://localhost:3000/login'

  constructor(private http: HttpClient) { }

  usersList: Users[]= []

  //addToList
  postUser() {
    return this.http.post(this.baseURL, this.nUser)
  }

  login(authCridential:any)
  {
    return this.http.post(this.baseURL, authCridential)
  }

  setToken(name:string,token:string)
  {
    localStorage.setItem(name, token)
  }

  deleteToken()
  {
    localStorage.removeItem('token')
  }

  getUserPayLoad()
  {
    var token= localStorage.getItem('token')
    if(token)
    {
       var userPayLoad= atob(token.split('.')[1])
       return JSON.parse(userPayLoad)
    }
    else
    {
      return null
    }
  }

  isLoggedIn()
  {
     var userPlayLoad= this.getUserPayLoad()
     if(userPlayLoad)
     {
       return true
     }
     else
     {
       return false
     }
  }

//  jwt() {
//     // create authorization header with jwt token
//     let currentUser = JSON.parse(localStorage.getItem('token')||'{}');
//     if (currentUser && currentUser.token) {
//         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
//         return new RequestOptions({ headers: headers });
//     }
// }

}
