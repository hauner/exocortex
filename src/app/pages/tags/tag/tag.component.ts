import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tagLinks$: Observable<ScullyRoute[]>;

  constructor(private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe()
      .subscribe((p: ParamMap) => {
        const tag = p.get('tag');
        if (tag == null) {
          this.tagLinks$ = EMPTY;
          return;
        }

        this.tagLinks$ = this.scully.available$
          .pipe (
            map (routes => {
              return routes
                .filter (r => r.tags != null)
                .filter (r => r.tags.indexOf(tag) >= 0)
                .filter (r => r.published != null && r.published)
                .sort((l, r) => r.date.localeCompare (l.date));
            })
          );

      });
  }

}
