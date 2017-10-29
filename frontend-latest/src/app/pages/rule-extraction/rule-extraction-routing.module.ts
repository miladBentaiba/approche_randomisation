import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuleExtractionComponent } from './rule-extraction.component';

const routes: Routes = [{
  path: '',
  component: RuleExtractionComponent,
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
export class RuleExtractionRoutingModule {

}

export const routedComponents = [
  RuleExtractionComponent,

];
