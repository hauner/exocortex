import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {latestBlog} from "../operators/latest-blog";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private scully: ScullyRoutesService
  ) {
  }

  ngOnInit() {
    // this.links$.subscribe(links => {
    //   console.log(links);
    // });

    this.scully.available$
      .pipe(
        latestBlog()
      )
      .subscribe(r => {
        this.router.navigate([r.route]);
      })
  }

}
