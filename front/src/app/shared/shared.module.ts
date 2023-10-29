import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
