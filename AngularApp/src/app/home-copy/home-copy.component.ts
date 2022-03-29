import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-copy',
  templateUrl: './home-copy.component.html',
  styleUrls: ['./home-copy.component.css']
})
export class HomeCopyComponent implements OnInit {

  constructor(public router:  Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.router.navigate(['/login'])
  }
}
