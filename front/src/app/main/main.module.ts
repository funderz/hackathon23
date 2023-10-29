import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main.component';
import {SharedModule} from "../shared/shared.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LandingPageComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    LandingPageComponent,
    MainComponent
  ]
})
export class MainModule { }
