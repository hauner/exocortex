import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { TagListComponent } from './taglist/tag-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TagListComponent
  ]
})
export class PartsModule { }
