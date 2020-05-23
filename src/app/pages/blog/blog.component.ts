import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {isScullyGenerated, isScullyRunning, ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {from, Observable, of, Subscription} from "rxjs";
import {filter, first, flatMap, map, pairwise, switchMap, tap} from 'rxjs/operators';
import {HighlightService} from '../../highlight.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true
})
export class BlogComponent implements OnInit, AfterViewChecked {

  isRunning = isScullyRunning();
  isGenerated = isScullyGenerated();

  // sub: Subscription;
  current: ScullyRoute;
  routePrev: ScullyRoute;
  routeNext: ScullyRoute;

  constructor(
    private location: Location,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService
  ) {
  }

  ngOnInit() {
    this.init();

    this.location.onUrlChange((url) => {
      this.init();
    });
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  private init() {
    this/*.scully*/.getCurrent ()
      .pipe (
        first ()
      )
      .subscribe(r => {
        this.current = r;
      });
  }

  /**
   * scully doesn't handle <base href=..>
   */
  getCurrent(): Observable<ScullyRoute> {
    if (!location) {
      /** probably not in a browser, no current location available */
      return of();
    }

    const baseRef = '/blog';

    const curLocation = decodeURI(location.pathname).trim();
    return this.scully.available$
      .pipe (
        map (list =>
          list.find (r =>
            curLocation === r.route.trim ()
            || curLocation === (baseRef + r.route.trim ())
            || (r.slugs && Array.isArray (r.slugs) && r.slugs.find (slug => curLocation.endsWith (slug.trim ())))
          )
        )
      );
  }

  /*
  private initCurrent () {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }

    this.sub = this.scully.getCurrent ()
      .pipe(
        tap(r => {
          console.log('current', r);
          this.current = r;
          this.routePrev = null;
          this.routeNext = null;
        }),
        flatMap(() => this.scully.available$
            .pipe(
              map (routes => {
                return routes
                  .filter ((r) => {
                    return (r.published != null) && (r.published === true);
                  })
                  .sort((l, r) => {
                    return l.date.localeCompare (r.date);
                  })
              }),
              flatMap(from),
              pairwise()
            )
        )
      )
      .subscribe((routes: ScullyRoute[]) => {
          if (this.current == null) {
            return;
          }

          if (routes[0].route == this.current.route) {
            this.routeNext = routes[1];
          } else if (routes[1].route == this.current.route) {
            this.routePrev = routes[0];
          }
      })
  }*/

}
