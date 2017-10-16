import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import {DataTableModule, SharedModule} from 'primeng/primeng';

import { ThemeModule } from '../../@theme/theme.module';
import { CaseExtractionRoutingModule, routedComponents } from './case-extraction-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    CaseExtractionRoutingModule,
    DataTableModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CaseExtractionModule { }
