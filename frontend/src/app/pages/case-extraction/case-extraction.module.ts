import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { CasecancerService } from '../../services/case-extraction.service';
import { ThemeModule } from '../../@theme/theme.module';
import { CaseExtractionRoutingModule, routedComponents } from './case-extraction-routing.module';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    CaseExtractionRoutingModule,
    DataTableModule,
    SharedModule,ConfirmDialogModule,DialogModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers:[CasecancerService, ConfirmationService]

})
export class CaseExtractionModule { }
