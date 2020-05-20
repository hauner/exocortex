import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

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


  constructor(private route: ActivatedRoute, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
  }

}
