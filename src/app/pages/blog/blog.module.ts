import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {PartsModule} from '../../parts/parts.module';
import { AsciidoctorComponent } from './asciidoctor/asciidoctor.component';

@NgModule({
  declarations: [
    BlogComponent,
    AsciidoctorComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    PartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogModule {}
