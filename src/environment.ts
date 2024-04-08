export const environment = {
  production: false,
  selfUrl: 'http://localhost:4200/',
  myAppApiUrl: 'http://localhost:8080',

  //selfUrl: 'https://ebax.cratechnologie.com',
  apiUrl: 'https://cratechnologie.com:8443/cratechnologie',
  routes: {
    home: 'home',
    services: 'services',
    serviceStructure: 'service-structure',
    'developpementLogicielEtServiceWeb': 'developpement-logiciel-et-service-web',
    'designGraphisme': 'design-graphisme',
    'businessIntelligence': 'business-intelligence',
    'reseauInformatique': 'reseau-informatique',
    'gestionInfrastructure': 'gestion-infrastructure',
    'maintenanceMateriels': 'maintenance-materiels',
    'domotiqueEtSecuriteBatiment': 'securite',
    'infogerance': 'infogerance',
    'parcInformatique': 'parc',
    'fournitureMateriels': 'fourniture-materiels',
    'autresServices': 'autres-services',
    nousJoindre: 'nous-joindre',
    aPropos: 'a-propos',
    // admin: 'admin',
    // 'admin/category': 'admin/category',
    // 'admin/category/add': 'admin/category/add',
    // 'admin/category/edit/:id': 'admin/category/edit/:id',
    // 'admin/category/detail/:id': 'admin/category/detail/:id',
    // 'admin/article': 'admin/article',
    // 'admin/article/add': 'admin/article/add',
    // 'admin/article/edit/:id': 'admin/article/edit/:id',
    // 'admin/article/detail/:id': 'admin/article/detail/:id',
    // 'admin/page': 'admin/page',
    // 'admin/page/add': 'admin/page/add',
    // 'admin/page/edit/:id': 'admin/page/edit/:id',
    // 'admin/page/detail/:id': 'admin/page/detail/:id',
    // 'admin/message': 'admin/message',
    // 'admin/message/add': 'admin/message/add',
    // 'admin/message/edit/:id': 'admin/message/edit/:id',
    // 'admin/message/detail/:id': 'admin/message/detail/:id',
    // 'admin/service-request': 'admin/service-request',
    // 'admin/service-request/add': 'admin/service-request/add',
    // 'admin/service-request/edit/:id': 'admin/service-request/edit/:id',
    // 'admin/service-request/detail/:id': 'admin/service-request/detail/:id',
},




  firebase: {
    apiKey: "AIzaSyBy1f41fb1NbsX6_MX0VGzT0WRMJAhVmGQ",
    authDomain: "dashtic-b40aa.firebaseapp.com",
    projectId: "dashtic-b40aa",
    storageBucket: "dashtic-b40aa.appspot.com",
    messagingSenderId: "1088116497583",
    appId: "1:1088116497583:web:6d10b979c29d2a7544885a"
  },
  cookieDomain: 'localhost',


  fileGeneric: './assets/images/file-generic.png',
  fileImage: './assets/images/file-generic.png',

  fileAudio: './assets/images/file-audio.png',
  fileVideo: './assets/images/file-video.png',


  fileCompressed: './assets/images/file-compressed.png',
  filePdf: './assets/images/file-pdf.png',
  fileDocx: './assets/images/file-docx.png',
  filePpt: './assets/images/file-ppt.png',
  fileXls: './assets/images/file-xls.png',
  fileSql: './assets/images/file-sql.png',
  fileTxt: './assets/images/file-txt.png',

  statut_data: [
    { 'label': 'Actif', 'value': 1 }
    , { 'label': 'Inactif', 'value': 0 }
  ],
  booleanDataStruct: [
    { "name": "Oui", "label": "Actif", "value": 1 }
    , { "name": "Non", "label": "Inactif", "value": 0 }
  ],
  booleanDataStructYesNo: [
    { "name": "Oui", "label": "Oui", "value": 1 }
    , { "name": "Non", "label": "Non", "value": 0 }
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
