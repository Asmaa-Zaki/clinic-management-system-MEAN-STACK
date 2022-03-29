import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicServService } from 'src/app/Features/clinic-serv.service';
import { ClinicServ } from 'src/app/Module/clinic-serv';

@Component({
  selector: 'app-service-read',
  templateUrl: './service-read.component.html',
  styleUrls: ['./service-read.component.css']
})
export class ServiceReadComponent implements OnInit {

  searchValue?: string
  direction: string=''
  column: string=''
  type: string=''

  constructor(public clinicservService: ClinicServService, private router: Router) { }

  ngOnInit(): void {
    this.show()
  }
  
show()
{
  this.clinicservService.GetList().subscribe((res) => {
  this.clinicservService.ClinicServLists = res as ClinicServ[];
  }, (error)=> {
    if(error instanceof HttpErrorResponse)
    {
      if(error.status === 403)
      {
        alert("U don't have permission")
        this.router.navigate(['forbidden'])
      }
    }
  })
}

sortIdAsc()
{
  this.direction='asc'
  this.column='_id'
  this.type='number'
}

sortIdDesc()
{
  this.direction='desc'
  this.column='_id'
  this.type='number'
}

sortDocIdAsc()
{
  this.direction='asc'
  this.column='doctorId'
  this.type='number'
}

sortDocIdDesc()
{
  this.direction='desc'
  this.column='doctorId'
  this.type='number'
}

sortNameAsc()
{
  this.direction='asc'
  this.column='name'
  this.type='string'
}

sortNameDesc()
{
  this.direction='desc'
  this.column='name'
  this.type='string'
}



sortDescAsc()
{
  this.direction='asc'
  this.column='description'
  this.type='string'
}

sortDescDesc()
{
  this.direction='desc'
  this.column='description'
  this.type='string'
}
sortPriceAsc()
{
  this.direction='asc'
  this.column='price'
  this.type='number'
}

sortPriceDesc()
{
  this.direction='desc'
  this.column='price'
  this.type='number'
}

}

