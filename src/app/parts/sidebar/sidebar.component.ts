import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {latestBlogs} from "../../operators/latest-blog";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$
    .pipe(
      latestBlogs ()
    )

  @Input()
  showArticles = false;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
