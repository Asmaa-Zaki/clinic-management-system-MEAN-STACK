import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Features/users.service';
import { Users } from 'src/app/Module/users';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.css']
})
export class UsersReadComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.show()
  }

  show()
  {
    // this.userService.GetList().subscribe((res)=>{
    //   this.userService.usersList = res as Users[]
    // })
  }

}
