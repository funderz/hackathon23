import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    NotFoundComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
