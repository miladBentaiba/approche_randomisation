import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: DashboardComponent,
  }, {
    path: 'resolution',
    loadChildren: './resolution/resolution.module#ResolutionModule',
  }, {
    path: 'case-extraction',
    loadChildren: './case-extraction/case-extraction.module#CaseExtractionModule',
  }, {
    path: 'rule-extraction',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'dashboard',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'settings',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'help',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
