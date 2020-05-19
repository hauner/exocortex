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

export function latestBlogs (count?: number): OperatorFunction<ScullyRoute[], ScullyRoute[]> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe(
        map (routes => {
          let result = routes
            .filter (r => r.published != null && r.published)
            .sort((l, r) => r.date.localeCompare (l.date));

            if (count != null) {
              result = result.slice(0, count)
            }

            return result;
        })
      )
  };
}
