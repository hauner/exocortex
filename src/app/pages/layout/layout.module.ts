import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {PartsModule} from "../../parts/parts.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
  ]
})
export class LayoutModule { }
