import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {
  isScullyGenerated,
  isScullyRunning,
  ScullyRoute,
  ScullyRoutesService
} from "@scullyio/ng-lib";
import {from, Observable, Subscription} from "rxjs";
import {filter, first, flatMap, map, pairwise, switchMap, tap} from 'rxjs/operators';
import {HighlightService} from "../../highlight.service";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true
})
export class BlogComponent implements OnInit, AfterViewChecked {

  isRunning = isScullyRunning();
  isGenerated = isScullyGenerated();

  // current$: Observable<ScullyRoute> = this.scully.getCurrent()
  //   .pipe(
  //     tap (c => console.log('pre-init', c)),
  //     first()
  //   );

  // sub: Subscription;
  current: ScullyRoute;
  routePrev: ScullyRoute;
  routeNext: ScullyRoute;

  constructor(
    private location: Location,
    private scully: ScullyRoutesService,
    private highlightService: HighlightService
  ) {
    // console.log('construct BlogComponent()');
  }

  ngOnInit() {
    this.init();

    this.location.onUrlChange((url) => {
      // console.log('location', url);
      this.init();
    });
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  private init() {
    this.scully.getCurrent ()
      .pipe (
        first ()
      )
      .subscribe(r => {
        // console.log('init route', r);
        this.current = r;
      });

    // this.current$ = this.scully.getCurrent()
    //     .pipe(
    //       tap (c => console.log('init: current', c)),
    //       filter(c => c != null)
    //     );
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
