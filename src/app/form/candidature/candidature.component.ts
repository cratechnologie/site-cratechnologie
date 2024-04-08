import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styles: [
  ]
})
export class CandidatureComponent {
  @Input() candidature: Candidature;
  cvFile: File | null;
  selectedFile: File | undefined;
  isSuccess: boolean;
  showAlert: boolean;
  alertCandidature: string;

  constructor(
    private candidatureService: CandidatureService,
    private router: Router
  ) { }

  ngOnInit() { }

  submitForm() {
    // const formData = new FormData();
    // formData.append('firstname', this.candidature.firstname);
    // formData.append('name', this.candidature.name);
    // formData.append('email', this.candidature.email);
    // formData.append('phone', this.candidature.phone);
    // formData.append('job', this.candidature.job);
    // formData.append('cv', this.selectedFile);
    // console.log(formData);
    // this.candidatureService.createCandidature(formData).subscribe(
    //   response => {
    //     console.log('Réponse du serveur:', response);
    //     // Gérez la réponse du serveur ici
    //   },
    //   error => {
    //     console.error('Erreur lors de la requête POST:', error);
    //   }
    // );

    console.log(this.candidature);
    this.candidatureService.envoyerCandidature(this.candidature, this.cvFile).subscribe(
      (response) => {
        console.log("Succès !");
      },
      (error) => {
        console.log("Echec !");
      }
    );
  }

  handleCVUpload(event: any) {
    this.cvFile = event.target.files[0];
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.cvFile = event.target.files[0];
  }
}
