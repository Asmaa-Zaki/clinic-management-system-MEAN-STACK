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

  nService?: ClinicServ = new ClinicServ(0, 0, "", "", 0)
  private updat: ServiceUpdateComponent = new ServiceUpdateComponent(this.clinicSerService)
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
  }

  save() {
    this.clinicSerService.AddToList().subscribe((res) => {
      this.router.navigate(['admin/serviceList'])
    }, (error) => {
      console.log(error);
      alert(`This Id ${error} already exist`)
    })
  }
  update() {
    if (this.nService != undefined) {
      this.updat.SavecService(this.nService)
      this.router.navigate(['admin/serviceList'])
    }
  }
}



