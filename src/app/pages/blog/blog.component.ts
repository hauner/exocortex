import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {from, Subscription} from "rxjs";
import {flatMap, map, pairwise, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true
})
export class BlogComponent implements OnInit {

  sub: Subscription;

  current: ScullyRoute;
  routePrev: ScullyRoute;
  routeNext: ScullyRoute;

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private location: Location) {
  }

  ngOnInit() {
    this.location.onUrlChange((url) => {
      this.initCurrent();
    });

    this.initCurrent();
  }

  private initCurrent () {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }

    this.sub = this.scully.getCurrent ()
      .pipe(
        tap(r => {
          this.current = r;
          this.routePrev = null;
          this.routeNext = null;
        }),
        switchMap(() => this.scully.available$
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
          if (routes[0].route == this.current.route) {
            this.routeNext = routes[1];
          } else if (routes[1].route == this.current.route) {
            this.routePrev = routes[0];
          }
      })
  }

}
