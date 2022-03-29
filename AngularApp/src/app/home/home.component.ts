import { Component, ErrorHandler, OnInit } from '@angular/core';
import { UsersService } from '../Features/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userServ: UsersService) { }

  ngOnInit(): void {

  }
}
