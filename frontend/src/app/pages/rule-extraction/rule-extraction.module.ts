import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { RulecancerService } from '../../services/rule-extraction.service';
import { ThemeModule } from '../../@theme/theme.module';
import { RuleExtractionRoutingModule, routedComponents } from './rule-extraction-routing.module';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    RuleExtractionRoutingModule,
    DataTableModule,
    SharedModule,ConfirmDialogModule,DialogModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers:[RulecancerService, ConfirmationService]

})
export class RuleExtractionModule { }
