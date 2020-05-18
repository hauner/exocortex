import {Observable, OperatorFunction} from "rxjs";
import {ScullyRoute} from "@scullyio/ng-lib";
import {map} from "rxjs/operators";

export function latestBlog (): OperatorFunction<ScullyRoute[], ScullyRoute> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe(
        map (routes => {
          return routes
            .filter (r => r.published != null && r.published)
            .sort((l, r) => r.date.localeCompare (l.date))
            .shift()
        })
      )
  };
}
