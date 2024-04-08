import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/footer-admin/footer-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PageComponent } from './admin/page/page.component';
import { CategoryComponent } from './admin/category/category.component';
import { ArticleComponent } from './admin/article/article.component';
import { MessageComponent } from './admin/message/message.component';
import { ServiceRequestComponent } from './admin/service-request/service-request.component';
import { MessageFormComponent } from './admin/form/message-form/message-form.component';
import { AddMessageComponent } from './admin/message/add-message/add-message.component';
import { AddPageComponent } from './admin/page/add-page/add-page.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { AddArticleComponent } from './admin/article/add-article/add-article.component';
import { AddServiceRequestComponent } from './admin/service-request/add-service-request/add-service-request.component';
import { CategoryFormComponent } from './admin/form/category-form/category-form.component';
import { ArticleFormComponent } from './admin/form/article-form/article-form.component';
import { PageFormComponent } from './admin/form/page-form/page-form.component';
import { ServiceRequestFormComponent } from './admin/form/service-request-form/service-request-form.component';
import { EditMessageComponent } from './admin/message/edit-message/edit-message.component';
import { DetailMessageComponent } from './admin/message/detail-message/detail-message.component';
import { EditPageComponent } from './admin/page/edit-page/edit-page.component';
import { DetailPageComponent } from './admin/page/detail-page/detail-page.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { DetailCategoryComponent } from './admin/category/detail-category/detail-category.component';
import { EditArticleComponent } from './admin/article/edit-article/edit-article.component';
import { DetailArticleComponent } from './admin/article/detail-article/detail-article.component';
import { EditServiceRequestComponent } from './admin/service-request/edit-service-request/edit-service-request.component';
import { DetailServiceRequestComponent } from './admin/service-request/detail-service-request/detail-service-request.component';
import { DemandeDServiceModule } from './demande-de-service/demande-de-service.module';
import { NousJoindreFormComponent } from './form/nous-joindre-form/nous-joindre-form.component';
import { AutresServicesComponent } from './pages/autres-services/autres-services.component';
import { CandidatureComponent } from './form/candidature/candidature.component';
import { BeforeFooterComponent } from './includes/before-footer/before-footer.component';
import { GestionInfrastructureComponent } from './pages/gestion-infrastructure/gestion-infrastructure.component';
import { InfogeranceComponent } from './pages/infogerance/infogerance.component';
import { ParcInformatiqueComponent } from './pages/parc-informatique/parc-informatique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderAdminComponent,
    FooterComponent,
    FooterAdminComponent,
    HomeComponent,
    ServicesComponent,
    DeveloppementLogicielEtServiceWebComponent,
    DesignGraphismeComponent,
    BusinessIntelligenceComponent,
    ReseauInformatiqueComponent,
    MaintenanceMaterielsComponent,
    DomotiqueEtSecuriteComponent,
    FournitureMaterielsComponent,
    NousJoindreComponent,
    DemandeServiceComponent,
    AProposComponent,
    DashboardComponent,
    PageComponent,
    CategoryComponent,
    ArticleComponent,
    MessageComponent,
    ServiceRequestComponent,
    MessageFormComponent,
    AddMessageComponent,
    AddPageComponent,
    AddCategoryComponent,
    AddArticleComponent,
    AddServiceRequestComponent,
    CategoryFormComponent,
    ArticleFormComponent,
    PageFormComponent,
    ServiceRequestFormComponent,
    EditMessageComponent,
    DetailMessageComponent,
    EditPageComponent,
    DetailPageComponent,
    EditCategoryComponent,
    DetailCategoryComponent,
    EditArticleComponent,
    DetailArticleComponent,
    EditServiceRequestComponent,
    DetailServiceRequestComponent,
    NousJoindreFormComponent,
    AutresServicesComponent,
    CandidatureComponent,
    BeforeFooterComponent,
    GestionInfrastructureComponent,
    InfogeranceComponent,
    ParcInformatiqueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DemandeDServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
