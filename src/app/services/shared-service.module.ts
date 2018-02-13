import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { ORIGIN_URL } from './baseurl.constants';
import { REQUEST } from './request';

/************** Services **********************/
import { BaseApiService } from '../core/services/api/base-api.service';
import { AppService } from './app/app.service';
import { IssuesService } from './github/issues.service'

export function getOriginUrl() {
  return window.location.origin;
}
export function getRequest() {
  // the Request object only lives on the server
  return { cookie: document.cookie };
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}


@NgModule({

  imports: [CommonModule],
  exports: [],
  providers: [
    
    { provide: ORIGIN_URL, useFactory: (getOriginUrl) }
    , { provide: REQUEST, useFactory: (getRequest) }
    , { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions] }
    , AppService
    , IssuesService
  ]
})
export class SharedServicesModule { }
