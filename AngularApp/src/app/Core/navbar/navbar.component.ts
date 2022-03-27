import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../../Features/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  static logged= false
  logged= false
 
  constructor(public user:UsersService) { }
  ngOnInit(): void {
  //   this.user.GetList().subscribe((user)=>
  //   {
  //     if(UsersService.active==true)
  //     {
  //       this.logged=true
  //     }
  //     else
  //     {
  //       this.logged=false
  //     }
  //   })
  //  console.log(this.logged)
  // }
}
}