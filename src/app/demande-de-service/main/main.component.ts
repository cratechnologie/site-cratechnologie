import { Component, OnInit } from '@angular/core';
import { BimServicePublicService } from '../api/bim-service/services/bimServicePublic.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SysBusinessCatalogItem } from 'src/app/sys/models/sysBusinessCatalogItem';
import { SysTiersKnowAboutWay } from 'src/app/sys/models/sysTiersKnowAboutWay';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MainComponent implements OnInit {

  sysBusinessCatalogItemsSelectedId: any = "";

  sysBusinessCatalogItems: any[] = [
    { 'id': 'DÉVELOPPEMENT LOGICIEL & SERVICE DU WEB', 'name': 'DÉVELOPPEMENT LOGICIEL & SERVICE DU WEB' },
    { 'id': 'DESIGN/GRAPHISME', 'name': 'DESIGN/GRAPHISME' },
    { 'id': 'BUSINESS INTELLIGENCE', 'name': 'BUSINESS INTELLIGENCE' },
    { 'id': 'FOURNITURE MATÉRIELS', 'name': 'FOURNITURE MATÉRIELS' },
];

  // sysTiersKnowAboutWays: SysTiersKnowAboutWay[] = [];

  // sysTiersKnowAboutWaysSelected: SysTiersKnowAboutWay[] = [];

  sysBusinessCatalogItemSelected: SysBusinessCatalogItem = {};

  bimServicePublicToEdit: any = {
    bimServicePublicExecutionAddresss: [
      { address: "" }
    ]
  };
  regions: any = [
    { 'id': '01', 'name': 'Kayes' },
    { 'id': '02', 'name': 'Koulikoro' },
    { 'id': '03', 'name': 'Sikasso' },
    { 'id': '04', 'name': 'Ségou' },
    { 'id': '05', 'name': 'Mopti' },
    { 'id': '06', 'name': 'Tombouctou' },
    { 'id': '07', 'name': 'Gao' },
    { 'id': '08', 'name': 'Kidal' },
    { 'id': '09', 'name': 'Kayor' },
    { 'id': '10', 'name': 'Taoudenit' },
    { 'id': '11', 'name': 'Ménaka' },
    { 'id': '12', 'name': 'Bamako' } 
  ];

  loadingProcess: boolean;
  successMessage: boolean;
  failureMessage: boolean;
  loading: boolean;
  invalid: any = {};
  customer: Customer = {
    id: null,
    civility: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    customerAddress: '',
    customerAddressregion: '',
    customeCodePostal: '',
    service: '',
    message: ''
  };

  constructor(
    public modalService: NgbModal
    , private utilsService: UtilsService
    , private authService: AuthService
    , private bimServicePublicService: BimServicePublicService,
    private customerService: CustomerService

  ) { }
  ngOnInit(): void { 
    
 
  }

  ngAfterViewInit() {
    this.initProcess();
  }

  afterLoad() {
  }
  initProcess() {
    this.invalid = {};
    this.loadingProcess = true;
    this.bimServicePublicService.getEditionData().subscribe(response => {
      this.loadingProcess = false;
      //this.sysTiersKnowAboutWays = response['sysTiersKnowAboutWays'];

      // Appel de la méthode pour trier les éléments
      this.sortSysBusinessCatalogItems();

      // Appel de la méthode pour supprimer les doublons
      this.removeDuplicateSysBusinessCatalogItems();

      console.log(response);
      this.afterLoad();
    },
      error => {
        this.loadingProcess = false;
      });
  }

  process() {
    this.loadingProcess = true;
   // this.sysTiersKnowAboutWaysSelected = this.sysTiersKnowAboutWays.filter((item) => item.checked);
    this.sysBusinessCatalogItemSelected = this.sysBusinessCatalogItems.find((item) => item.id == this.sysBusinessCatalogItemsSelectedId)!;

    if (!this.bimServicePublicToEdit['tiersFirstname'] ||
      !this.bimServicePublicToEdit['tiersLastname'] ||
      !this.bimServicePublicToEdit['civility'] ||
      !this.bimServicePublicToEdit['email'] ||
      !this.bimServicePublicToEdit['tiersAddress'] ||
      !this.bimServicePublicToEdit['sysGeoRegionTiers'] ||
      !this.sysBusinessCatalogItemsSelectedId) {
      let missingFields = [];
      if (!this.bimServicePublicToEdit['tiersLastname']) {
        missingFields.push("Nom");
      }
      if (!this.bimServicePublicToEdit['tiersFirstname']) {
        missingFields.push("Prénom");
      }
      if (!this.bimServicePublicToEdit['civility']) {
        missingFields.push("Civilité");
      }
      if (!this.bimServicePublicToEdit['email']) {
        missingFields.push("Courriel");
      }
      if (!this.bimServicePublicToEdit['tiersAddress']) {
        missingFields.push("Adresse du client");
      }
      if (!this.bimServicePublicToEdit['sysGeoRegionTiers']) {
        missingFields.push("La région client");
      }
      // if (!this.bimServicePublicToEdit['tiersAddressZipcode']) {
      //   missingFields.push("Code postal du client");
      // }
      if (!this.sysBusinessCatalogItemsSelectedId) {
        missingFields.push("Pour quel service désirez-vous une soumission?");
      }

      const missingFieldsMessage = "Les champs suivants sont obligatoires et doivent être renseignés : " + missingFields.join(", ");
      alert(missingFieldsMessage);
      this.loadingProcess = false;
      return;
    }

    if (!this.bimServicePublicToEdit['phoneNumberMain'] && !this.bimServicePublicToEdit['phoneNumberOther']) {
      alert("Au moins l'un des deux numéros de téléphone doit être renseigné.");
      this.loadingProcess = false;
      return;
    }

    //this.bimServicePublicToEdit["sysTiersKnowAboutWays"] = this.sysTiersKnowAboutWaysSelected;
    this.bimServicePublicToEdit["sysBusinessCatalogItem"] = this.sysBusinessCatalogItemSelected;
    this.customer.civility = this.bimServicePublicToEdit['civility'];
    this.customer.firstname = this.bimServicePublicToEdit['tiersFirstname'];
    this.customer.lastname = this.bimServicePublicToEdit['tiersLastname'];
    this.customer.email = this.bimServicePublicToEdit['email'];
    this.customer.customerAddress = this.bimServicePublicToEdit['tiersAddress'];
    this.customer.customerAddressregion = this.bimServicePublicToEdit['sysGeoRegionTiers'].name;
    this.customer.service = this.bimServicePublicToEdit["sysBusinessCatalogItem"].name;
    this.customer.phone = this.bimServicePublicToEdit['phoneNumberMain'] ?? this.bimServicePublicToEdit['phoneNumberOther'];


    console.log(this.customer);

    this.customerService.createCustomer(this.customer).subscribe(
      response => {
        this.activateSuccessMessage();
        //alert("La demande N° " + response['id'] + "  a bien été envoyée!");
        window.location.reload();
      },
      error => {
        console.log(error);
        alert("Erreur de demande de service");
        this.loadingProcess = false;
        this.activateFailureMessage();
        this.invalid = error.error.errors;
      }
    );
  }
  

  handlerEditionSuccess(summary: string, detail: string, response: any) {
    this.loadingProcess = false;
    setTimeout(() => {
    }, 1000);
  }
  handlerEditionError(summary: string) {
    this.loadingProcess = false;
  }

  activateFailureMessage() {
    this.failureMessage = true;
    setTimeout(() => {
      this.failureMessage = false;
    }, 5000); // Délai de 5000 millisecondes (5 secondes)
  }

  activateSuccessMessage() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 5000); // Délai de 5000 millisecondes (5 secondes)
  }

  sortSysBusinessCatalogItems() {
    this.sysBusinessCatalogItems.sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : '';
      const nameB = b.name ? b.name.toLowerCase() : '';
      return nameA.localeCompare(nameB);
    });
  }

  removeDuplicateSysBusinessCatalogItems() {
    const uniqueItems = [];
    const seenNames = new Set();

    this.sysBusinessCatalogItems.forEach(item => {
      const itemName = item.name ? item.name.toLowerCase() : '';

      if (!seenNames.has(itemName)) {
        seenNames.add(itemName);
        uniqueItems.push(item);
      }
    });

    this.sysBusinessCatalogItems = uniqueItems;
  }

  onResize(event: any) { }
}
