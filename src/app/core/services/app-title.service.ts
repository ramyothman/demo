import { Injectable } from '@angular/core';
import { Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

import * as changeCase from 'change-case';

@Injectable()
export class AppTitleService {

  sub: Subscription;
  appName: string;

  constructor(private titleService: Title, private router: Router) {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        while (route.firstChild)
          route = route.firstChild;

        return route;
      })
      .flatMap(route => route.data)
      .subscribe(data => {
        let title = data['title'];

        if (title) {
          let fragment = this.router.url.split('#')[1]

          if (fragment)
            title += " | " + changeCase.titleCase(fragment);
        }

        if (title && this.appName)
          title += ' - ' + this.appName;
        else if (this.appName)
          title = this.appName;

        if (title)
          this.titleService.setTitle(title);
      });
  }

  setTitle(title: string) {
    if (title !== null && title != '') {
      title = changeCase.titleCase(title);
      if (title && this.appName)
        title += ' - ' + this.appName;
      this.titleService.setTitle(title);
    }
  }

}
