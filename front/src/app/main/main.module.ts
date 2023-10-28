import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LandingPageComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    LandingPageComponent,
    MainComponent
  ]
})
export class MainModule { }
