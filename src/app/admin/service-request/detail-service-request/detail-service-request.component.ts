import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRequest } from 'src/app/models/service-request.model';
import { ServiceRequestService } from 'src/app/services/service-request.service';

@Component({
  selector: 'app-detail-service-request',
  templateUrl: './detail-service-request.component.html',
  styles: [
  ]
})
export class DetailServiceRequestComponent implements OnInit {
  serviceRequest: ServiceRequest | undefined;

  constructor(
    private serviceRequestService: ServiceRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serviceRequestService.getServiceRequestById(+id).subscribe(
        (serviceRequest) => this.serviceRequest = serviceRequest
      )
    }
  }

  goBack(): void {
    this.router.navigate(['admin/service-request']);
  }

  goToEditServiceRequest(id: number): void {
    this.router.navigate(['admin/service-request/edit', id])
  }

  goToDeleteServiceRequest(serviceRequestId: number) {
    this.serviceRequestService.deleteServiceRequest(serviceRequestId)
      .subscribe((response) => this.goBack())
  }
}
