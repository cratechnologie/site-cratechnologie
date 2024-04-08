import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequest } from 'src/app/models/service-request.model';
import { ServiceRequestService } from 'src/app/services/service-request.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styles: [
  ]
})
export class ServiceRequestComponent implements OnInit {

  serviceRequestList: ServiceRequest[];

  constructor(
    private serviceRequestService: ServiceRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serviceRequestService.getAllServiceRequests().subscribe(
      (serviceRequestList) => this.serviceRequestList = serviceRequestList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/service-request']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['admin/service-request/detail', id])
  }

  goToEditServiceRequest(id: number): void {
    this.router.navigate(['admin/service-request/edit', id])
  }

  goToDeleteServiceRequest(serviceRequestId: number) {
    this.serviceRequestService.deleteServiceRequest(serviceRequestId)
      .subscribe((response) => this.goBack())
  }

}