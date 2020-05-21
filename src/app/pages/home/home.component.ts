import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {latestBlogs} from '../../operators/blog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$
    .pipe(
      latestBlogs ()
    )

  constructor(
    private router: Router,
    private scully: ScullyRoutesService
  ) {
  }

  ngOnInit() {
  }

}
