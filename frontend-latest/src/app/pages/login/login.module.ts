import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { Login } from './login.component';
import { routing }       from './login.routing';
import {AuthenticationService } from '../../services/index';
import { AppConfig } from '../../app.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ThemeModule,
    routing
  ],providers: [AppConfig],
  declarations: [
    Login
  ]
})
export class LoginModule {}
