import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Users } from '../Module/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() nUser: Users= new Users(1, "", "", "")

  Errror: any

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

  setToken(name:string,token:any)
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

  getToken()
  {
    return localStorage.getItem('token')
  }
}
