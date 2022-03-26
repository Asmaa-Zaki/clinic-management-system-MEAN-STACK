import { Component, Input, OnInit } from '@angular/core';
import { ClinicServService } from 'src/app/Features/clinic-serv.service';
import { ClinicServ } from 'src/app/Module/clinic-serv';

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {
  @Input() cService: ClinicServ= new ClinicServ(0,0, "", "", 0)
  constructor(public clinicServe: ClinicServService) { }

  ngOnInit(): void {
  }

  DeleteClinicService()
  {
    this.clinicServe.DeleteClinicSer(this.cService).subscribe((res)=>{ alert("Service with Id: "+this.cService._id+" Deleted")
  },(error)=>alert("This Service not still exist"))
 }
}
