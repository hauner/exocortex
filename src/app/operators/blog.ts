import {Observable, OperatorFunction} from "rxjs";
import {ScullyRoute} from "@scullyio/ng-lib";
import {map} from "rxjs/operators";

export function latestBlog (): OperatorFunction<ScullyRoute[], ScullyRoute> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe(
        latestBlogs(0),
        map(a => a.shift())
      )
  };
}

export function latestBlogs (count?: number): OperatorFunction<ScullyRoute[], ScullyRoute[]> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe(
        filterPublishedBlogs (),
        map (routes => {
          let result = routes
            .sort((l, r) => r.date.localeCompare (l.date));
            if (count != null) {
              result = result.slice(0, count)
            }

            return result;
        })
      );
  };
}

export function filterPublishedBlogs (): OperatorFunction<ScullyRoute[], ScullyRoute[]> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe (
        ignoreHiddenBlogs (),
        map (routes => {
            return routes
              .filter (r => r.published != null && r.published)
        })
      );
  };
}

export function ignoreHiddenBlogs (): OperatorFunction<ScullyRoute[], ScullyRoute[]> {
  return (source$: Observable<ScullyRoute[]>) => {
    return source$
      .pipe (
        map (routes => {
            return routes
              .filter (r => {
                if (r.hidden == null) {
                  // keep
                  return true;
                }

                // use flag
                return !r.hidden;
              })
          }
        )
      );
  };
}
