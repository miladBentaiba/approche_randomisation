import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingRoutingModule, routedComponents } from './setting-routing.module';

import { UiSwitchModule }   from 'angular2-ui-switch/src'// update for same package

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    SettingRoutingModule,UiSwitchModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SettingModule { }
