import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequest } from 'src/app/models/service-request.model';
import { ServiceRequestService } from 'src/app/services/service-request.service';

@Component({
  selector: 'app-service-request-form',
  templateUrl: './service-request-form.component.html',
  styles: [
  ]
})
export class ServiceRequestFormComponent {
  @Input() serviceRequest: ServiceRequest;
  imageFile: File;

  constructor(private serviceRequestService: ServiceRequestService, private router: Router) { }

  ngOnInit() { }

  goBack(): void {
    this.router.navigate(['admin/service-request']);
  }

  onSubmit(): void {
    this.serviceRequestService.createServiceRequest(this.serviceRequest).subscribe(() => {
      this.goBack();
    });
  }

}
