import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {TagsRoutingModule} from './tags-routing.module';
import {TagsComponent} from './tags.component';
import {PartsModule} from '../../parts/parts.module';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    TagsComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    ScullyLibModule,
    PartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TagsModule {}
