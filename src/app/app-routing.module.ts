import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { DeveloppementLogicielEtServiceWebComponent } from './pages/developpement-logiciel/developpement-logiciel.component';
import { DesignGraphismeComponent } from './pages/design-graphisme/design-graphisme.component';
import { BusinessIntelligenceComponent } from './pages/business-intelligence/business-intelligence.component';
import { ReseauInformatiqueComponent } from './pages/reseau-informatique/reseau-informatique.component';
import { MaintenanceMaterielsComponent } from './pages/maintenance-materiels/maintenance-materiels.component';
import { DomotiqueEtSecuriteComponent } from './pages/domotique-et-securite/domotique-et-securite.component';
import { FournitureMaterielsComponent } from './pages/fourniture-materiels/fourniture-materiels.component';
import { NousJoindreComponent } from './pages/nous-joindre/nous-joindre.component';
import { DemandeServiceComponent } from './pages/demande-service/demande-service.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PageComponent } from './admin/page/page.component';
import { ArticleComponent } from './admin/article/article.component';
import { CategoryComponent } from './admin/category/category.component';
import { MessageComponent } from './admin/message/message.component';
import { ServiceRequestComponent } from './admin/service-request/service-request.component';
import { AddMessageComponent } from './admin/message/add-message/add-message.component';
import { EditMessageComponent } from './admin/message/edit-message/edit-message.component';
import { DetailMessageComponent } from './admin/message/detail-message/detail-message.component';
import { AddPageComponent } from './admin/page/add-page/add-page.component';
import { EditPageComponent } from './admin/page/edit-page/edit-page.component';
import { DetailPageComponent } from './admin/page/detail-page/detail-page.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './admin/category/detail-category/detail-category.component';
import { AddArticleComponent } from './admin/article/add-article/add-article.component';
import { EditArticleComponent } from './admin/article/edit-article/edit-article.component';
import { DetailArticleComponent } from './admin/article/detail-article/detail-article.component';
import { AddServiceRequestComponent } from './admin/service-request/add-service-request/add-service-request.component';
import { EditServiceRequestComponent } from './admin/service-request/edit-service-request/edit-service-request.component';
import { DetailServiceRequestComponent } from './admin/service-request/detail-service-request/detail-service-request.component';
import { environment } from 'src/environment';
import { AutresServicesComponent } from './pages/autres-services/autres-services.component';
import { GestionInfrastructureComponent } from './pages/gestion-infrastructure/gestion-infrastructure.component';
import { InfogeranceComponent } from './pages/infogerance/infogerance.component';
import { ParcInformatiqueComponent } from './pages/parc-informatique/parc-informatique.component';

const routes: Routes = [
  { path: environment.routes.home, component: HomeComponent },
  { path: environment.routes.services, component: ServicesComponent },
  { path: environment.routes.nousJoindre, component: NousJoindreComponent },
  { path: '', redirectTo: environment.routes.home, pathMatch: 'full' },
  // Ajouter les nouvelles routes avec les composants correspondants
  { path: environment.routes.aPropos, component: AProposComponent },
  { path: environment.routes.developpementLogicielEtServiceWeb, component: DeveloppementLogicielEtServiceWebComponent },
  { path: environment.routes.designGraphisme, component: DesignGraphismeComponent },
  { path: environment.routes.businessIntelligence, component: BusinessIntelligenceComponent },
  { path: environment.routes.reseauInformatique, component: ReseauInformatiqueComponent },
  { path: environment.routes.gestionInfrastructure, component: GestionInfrastructureComponent },
  { path: environment.routes.maintenanceMateriels, component: MaintenanceMaterielsComponent },
  { path: environment.routes.domotiqueEtSecuriteBatiment, component: DomotiqueEtSecuriteComponent },
  { path: environment.routes.infogerance, component: InfogeranceComponent },
  { path: environment.routes.parcInformatique, component: ParcInformatiqueComponent },
  { path: environment.routes.fournitureMateriels, component: FournitureMaterielsComponent },
  { path: environment.routes.autresServices, component: AutresServicesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
