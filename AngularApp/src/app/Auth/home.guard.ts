import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Features/users.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private userService:UsersService, public router:Router)
 { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.userService.isLoggedIn())
      {
        this.router.navigate(['admin'])
        return false
      }
    return true;
  }
  
}
