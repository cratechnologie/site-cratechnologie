import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'demande-service',
    children: [
      {
        path: '',
        component: MainComponent
      }
    ]
  }

];
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DemandeDServiceRoutingModule { }


