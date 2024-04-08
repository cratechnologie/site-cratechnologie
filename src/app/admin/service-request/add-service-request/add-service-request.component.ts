import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequest } from 'src/app/models/service-request.model';
import { ServiceRequestService } from 'src/app/services/service-request.service';

@Component({
  selector: 'app-add-service-request',
  templateUrl: './add-service-request.component.html',
  styles: [
  ]
})
export class AddServiceRequestComponent  implements OnInit {

  serviceRequest: ServiceRequest

  constructor(
    private serviceRequestService: ServiceRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serviceRequest = new ServiceRequest();
  }

  addServiceRequest(serviceRequest: ServiceRequest): void {
    // this.serviceRequestService.createServiceRequest(serviceRequest)
    //   .subscribe((serviceRequest) => this.router.navigate(['admin/serviceRequest']))
  }

}
