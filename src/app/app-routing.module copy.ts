import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { InspectionPrereceptionComponent } from './pages/developpement-logiciel/developpement-logiciel.component';
import { ResolutionDeProblemesComponent } from './pages/resolution-de-problemes/resolution-de-problemes.component';
import { ExpertiseLegaleComponent } from './pages/design-graphisme/design-graphisme.component';
import { EstimationDesCoutsComponent } from './pages/business-intelligence/business-intelligence.component';
import { EfficaciteEnergetiqueComponent } from './pages/reseau-informatique/reseau-informatique.component';
import { RapportEtatComponent } from './pages/maintenance-materiels/maintenance-materiels.component';
import { GestionDeProjetsComponent } from './pages/domotique-et-securite/domotique-et-securite.component';
import { InspectionDesFondationsComponent } from './pages/fourniture-materiels/fourniture-materiels.component';
import { AnalysesComponent } from './pages/analyses/analyses.component';
import { QualiteDeLairComponent } from './pages/qualite-de-lair/qualite-de-lair.component';
import { PotabiliteDeLeauComponent } from './pages/potabilite-de-leau/potabilite-de-leau.component';
import { AmianteComponent } from './pages/amiante/amiante.component';
import { MoisissuresComponent } from './pages/moisissures/moisissures.component';
import { ProblemesComponent } from './pages/problemes/problemes.component';
import { NousJoindreComponent } from './pages/nous-joindre/nous-joindre.component';
import { DemandeServiceComponent } from './pages/demande-service/demande-service.component';
import { ServicesBatimentComponent } from './pages/a-propos/a-propos.component';
import { CarrieresComponent } from './pages/carrieres/carrieres.component';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/inspection-prereception', component: InspectionPrereceptionComponent },
  { path: 'services/resolution-de-problemes', component: ResolutionDeProblemesComponent },
  { path: 'services/expertise-legale', component: ExpertiseLegaleComponent },
  { path: 'services/estimation-des-couts', component: EstimationDesCoutsComponent },
  { path: 'services/efficacite-energetique', component: EfficaciteEnergetiqueComponent },
  { path: 'services/rapport-etat', component: RapportEtatComponent },
  { path: 'services/gestion-de-projets', component: GestionDeProjetsComponent },
  { path: 'services/inspection-des-fondations', component: InspectionDesFondationsComponent },
  { path: 'analyses', component: AnalysesComponent },
  { path: 'analyses/qualite-de-lair', component: QualiteDeLairComponent },
  { path: 'analyses/potabilite-de-leau', component: PotabiliteDeLeauComponent },
  { path: 'analyses/amiante', component: AmianteComponent },
  { path: 'analyses/moisissures', component: MoisissuresComponent },
  { path: 'problemes', component: ProblemesComponent },
  { path: 'nous-joindre', component: NousJoindreComponent },
  { path: 'demande-service-1', component: DemandeServiceComponent },
  { path: 'services-batiment', component: ServicesBatimentComponent },
  { path: 'carrieres', component: CarrieresComponent },


  { path: 'admin', component: DashboardComponent },
  { path: 'admin/category', component: CategoryComponent },
  { path: 'admin/category/add', component: AddCategoryComponent },
  { path: 'admin/category/edit/:id', component: EditCategoryComponent },
  { path: 'admin/category/detail/:id', component: DetailCategoryComponent },
  { path: 'admin/article', component: ArticleComponent },
  { path: 'admin/article/add', component: AddArticleComponent },
  { path: 'admin/article/edit/:id', component: EditArticleComponent },
  { path: 'admin/article/detail/:id', component: DetailArticleComponent },
  { path: 'admin/page', component: PageComponent },
  { path: 'admin/page/add', component: AddPageComponent },
  { path: 'admin/page/edit/:id', component: EditPageComponent },
  { path: 'admin/page/detail/:id', component: DetailPageComponent },
  { path: 'admin/message', component: MessageComponent },
  { path: 'admin/message/add', component: AddMessageComponent },
  { path: 'admin/message/edit/:id', component: EditMessageComponent },
  { path: 'admin/message/detail/:id', component: DetailMessageComponent },
  { path: 'admin/service-request', component: ServiceRequestComponent },
  { path: 'admin/service-request/add', component: AddServiceRequestComponent },
  { path: 'admin/service-request/edit/:id', component: EditServiceRequestComponent },
  { path: 'admin/service-request/detail/:id', component: DetailServiceRequestComponent },
  { path: '', redirectTo: 'home', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
