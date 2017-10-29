import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseExtractionComponent } from './case-extraction.component';

const routes: Routes = [{
  path: '',
  component: CaseExtractionComponent,
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
export class CaseExtractionRoutingModule {

}

export const routedComponents = [
  CaseExtractionComponent,

];
