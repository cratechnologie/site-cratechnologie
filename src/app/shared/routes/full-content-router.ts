import { Routes } from '@angular/router';

export const full_content: Routes = [

  /*{
    path: 'entrepreneur-general',
    loadChildren: () => import('../../components/entrepreneur-general/entrepreneur-general.module').then(m => m.EntrepreneurGeneralModule)
  }
  ,
  {
    path: 'partenaire-estimation',
    loadChildren: () => import('../../components/partenaire-estimation/partenaire-estimation.module').then(m => m.PartenaireEstimationModule)
  }
  ,
  {
    path: 'sous-traitant',
    loadChildren: () => import('../../components/sous-traitant/sous-traitant.module').then(m => m.SousTraitantModule)
  }

  ,
  {
    path: 'maitre-oeuvre-architecte',
    loadChildren: () => import('../../components/maitre-oeuvre-architecte/maitre-oeuvre-architecte.module').then(m => m.MaitreOeuvreArchitecteModule)
  }
  ,*/


  {
      path: '',
      loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  }

  ,
  {
      path: 'home',
      loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  }
  ,
  {
    path: 'demande-de-service',
    loadChildren: () => import('../../components/demande-de-service/demande-de-service.module').then(m => m.DemandeDServiceModule)
  }
  ,
  {
    path: 'connexion',
    loadChildren: () => import('../../components/connexion/connexion.module').then(m => m.ConnexionModule)
  }



]
