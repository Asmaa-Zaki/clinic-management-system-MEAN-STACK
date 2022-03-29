import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicServService } from 'src/app/Features/clinic-serv.service';
import { ClinicServ } from 'src/app/Module/clinic-serv';
import { ServiceUpdateComponent } from '../service-update/service-update.component';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  type: any
  path= ""
  data:any
  nService?: ClinicServ = new ClinicServ(0, 0, "", "", 0)
  private updat: ServiceUpdateComponent = new ServiceUpdateComponent(this.clinicSerService, this.router)
  constructor(public clinicSerService: ClinicServService, public router: Router, public ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((r) => {
      this.nService = this.clinicSerService.ClinicServLists.find((ser) => {
        return ser._id == r['id']
      })
      if (this.nService != undefined) {
        this.clinicSerService.nClinicServ = this.nService
      }
    })

    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/serviceList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/serviceList"
    }
    else
    {
      this.path= "doctor/serviceList"
    }
}
  

  save() {
    this.clinicSerService.AddToList().subscribe((res) => {
      this.router.navigate([this.path])
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("this Id already exist")}
      }
    })
  }
  update() {
    if (this.nService != undefined) {
      this.updat.SavecService(this.nService)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }
}



