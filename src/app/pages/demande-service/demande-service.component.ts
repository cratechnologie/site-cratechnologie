import { Component } from '@angular/core';

@Component({
  selector: 'app-demande-service',
  templateUrl: './demande-service.component.html',
  styleUrls: ['./demande-service.component.css']
})
export class DemandeServiceComponent {
  currentStep: number = 1;
  showNewBuildingAddress: boolean = false; // Ajoutez cette variable

  toggleNewBuildingAddress() {
    const selectedOption = // Obtenir la valeur de l'option sélectionnée dans le menu déroulant
      document.getElementById('address_building') as HTMLSelectElement;

    this.showNewBuildingAddress = selectedOption.value === 'Ajouter une adresse';
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    // Logique pour soumettre le formulaire ici
  }

  calculateProgressWidth(): string {
    // Calcul de la largeur en pourcentage en fonction de l'étape actuelle
    return `${((this.currentStep - 1) * 25) + 25}%`;
  }

  calculateProgressValue(): number {
    // Valeur de progression en pourcentage
    return ((this.currentStep - 1) * 25) + 25;
  }
}
