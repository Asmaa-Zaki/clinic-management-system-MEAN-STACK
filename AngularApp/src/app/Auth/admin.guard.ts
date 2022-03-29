import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router){}
  data= JSON.parse(localStorage.getItem("data")||'{}') 
  type= this.data.data.type
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.type=="admin")
    {
      return true
    }
    else if(this.type== "Recpt")
    {
      this.router.navigate(['recept/appointmentList'])
      return false
    }
    else
    {
      this.router.navigate(['doctor/appointmentList'])
      return false 
    }
  }
  
}
