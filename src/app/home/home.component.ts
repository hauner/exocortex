import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<any> = this.scully.available$;

  menuVisible = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private scully: ScullyRoutesService
  ) {

  }

  ngOnInit() {
    this.links$.subscribe(links => {
      console.log(links);
    });
  }


  showMenu (event: Event) {
    console.log ('showMenu()');
    this.menuVisible = true;
    this.renderer.addClass(this.document.body, 'is-menu-visible');

    // no click on parents
    event.stopPropagation();
  }

  hideMenu () {
    console.log ('hideMenu()');

    if (this.menuVisible) {
      this.renderer.removeClass(this.document.body, 'is-menu-visible');
      this.menuVisible = false;
    }
  }

}
