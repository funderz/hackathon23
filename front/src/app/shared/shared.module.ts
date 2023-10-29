import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { DonationDialogComponent } from './components/donation-dialog/donation-dialog.component';
import {FormsModule} from "@angular/forms";
import { CompaignCardComponent } from './components/compaign-card/compaign-card.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    DonationDialogComponent,
    CompaignCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatProgressBarModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DonationDialogComponent,
    CompaignCardComponent
  ]
})
export class SharedModule { }
