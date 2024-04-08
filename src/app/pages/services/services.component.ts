import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [
  ]
})
export class ServicesComponent implements OnInit {
  showSliders: boolean = false;
  showMain: boolean = false;

  ngOnInit() {
    // Mettez une temporisation pour afficher sliders-container en premier
    setTimeout(() => {
      this.showSliders = true;
    }, 0); // Ajustez le délai au besoin

    // Mettez une temporisation supplémentaire pour afficher main après 1 seconde
    setTimeout(() => {
      this.showMain = true;
    }, 1000); // 1000 millisecondes équivaut à 1 seconde
  }
}