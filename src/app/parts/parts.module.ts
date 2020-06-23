import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class PartsModule { }
