import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {PartsModule} from '../../parts/parts.module';
import { BlogContentComponent } from './blog-content/blog-content.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogContentComponent
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
