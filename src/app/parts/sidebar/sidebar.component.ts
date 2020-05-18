import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$
    .pipe(
      map( (r: ScullyRoute[]) => {
          return r
            .filter(i => (i.published != null) && (i.published === true))
            .sort((l, r) => l.date.localeCompare(r.date))
            .slice(0, 5);
      })
    )

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
