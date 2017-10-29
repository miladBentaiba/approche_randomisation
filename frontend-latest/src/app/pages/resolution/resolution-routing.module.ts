import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResolutionComponent } from './resolution.component';

const routes: Routes = [{
  path: '',
  component: ResolutionComponent,
  children: [],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ResolutionRoutingModule {

}

export const routedComponents = [
  ResolutionComponent,

];
