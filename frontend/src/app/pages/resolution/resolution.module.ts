import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ResolutionRoutingModule, routedComponents } from './resolution-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    ResolutionRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ResolutionModule { }
