import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {from, Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {latestBlogs} from '../../operators/latest-blog';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$
    .pipe(
      latestBlogs ()
    )

  tag: string = null;

  tags$: Observable<string[]> = this.scully.available$
    .pipe (
      map (routes => {
        const tags = new Set<string> ();

        routes
          .filter (r => r.tags != null)
          .map (r => r.tags)
          .map (t => t.forEach (i => tags.add (i)));

        return [...tags]
          .sort((l, r) => l.localeCompare(r));
      })
    );

  tagLinks$: Observable<ScullyRoute[]>;

  constructor(private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe()
      .subscribe((p: ParamMap) => {
        // console.log('paramsMap', p);
        this.tag = p.get('tag');

        if (this.tag != null) {

          this.tagLinks$ = this.scully.available$
            .pipe (
              map (routes => {
                return routes
                  .filter (r => r.tags != null)
                  .filter (r => r.tags.indexOf(this.tag) >= 0)
                  .filter (r => r.published != null && r.published)
                  .sort((l, r) => r.date.localeCompare (l.date));
              })
            );
        }

      });

    // this.tags$.subscribe(t => console.log('tags', t));
  }

}
