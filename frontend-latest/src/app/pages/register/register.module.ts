import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

import { Register } from './register.component';
import { routing }       from './register.routing';
import {UserService } from '../../services/index';
import { AppConfig } from '../../app.config';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ThemeModule,
    routing
  ], providers: [UserService,AppConfig],
  declarations: [
    Register
  ]
})
export class RegisterModule {}
