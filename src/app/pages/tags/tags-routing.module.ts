import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TagsComponent} from './tags.component';

const routes: Routes = [
  {
    path: ':tag',
    component: TagsComponent
  },
  {
    path: '**',
    component: TagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}

