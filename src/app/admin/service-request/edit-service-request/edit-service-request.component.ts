import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceRequest } from 'src/app/models/service-request.model';
import { ServiceRequestService } from 'src/app/services/service-request.service';

@Component({
  selector: 'app-edit-service-request',
  templateUrl: './edit-service-request.component.html',
  styles: [
  ]
})
export class EditServiceRequestComponent implements OnInit {

  serviceRequest: ServiceRequest | undefined

  constructor(
    private route: ActivatedRoute,
    private serviceRequestService: ServiceRequestService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceRequestService.getServiceRequestById(+id).subscribe(
        (serviceRequest) => this.serviceRequest = serviceRequest
      );
    }
  }

}
