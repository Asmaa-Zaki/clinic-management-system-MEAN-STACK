import { Injectable, Injector, INJECTOR } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req:any, next:any)
  {
    let authService = this.injector.get(UsersService)
    let tokenizedReq= req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
