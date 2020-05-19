import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {TagsRoutingModule} from './tags-routing.module';
import {TagsComponent} from './tags.component';
import {PartsModule} from '../../parts/parts.module';


@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    ScullyLibModule,
    PartsModule
  ]
})
export class TagsModule {}
