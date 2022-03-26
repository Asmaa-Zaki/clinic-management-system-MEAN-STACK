import { Component, Input, OnInit } from '@angular/core';
import { ClinicServService } from 'src/app/Features/clinic-serv.service';
import { ClinicServ } from 'src/app/Module/clinic-serv';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  @Input() cService: ClinicServ= new ClinicServ(0, 0, "", "", 0)

  constructor(private clinicServ: ClinicServService) { }

  ngOnInit(): void {
  }

  EditcService()
  {
    this.clinicServ.nClinicServ= this.cService
  }

  SavecService(ser:ClinicServ)
  {
    this.clinicServ.EditClinicServ(ser).subscribe((res)=>{
      alert("updated")
    },(error)=>alert("not exist"))
  }
}
