import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main.component';
import {SharedModule} from "../shared/shared.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import { CompainComponent } from './compain/compain.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import { CompaignAddUpdateComponent } from './compaign-add-update/compaign-add-update.component';
import { CompaignDashboardComponent } from './compaign-dashboard/compaign-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LandingPageComponent,
    MainComponent,
    CompainComponent,
    CompaignAddUpdateComponent,
    CompaignDashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent,
    MainComponent
  ]
})
export class MainModule { }
