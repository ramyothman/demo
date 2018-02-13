import { Injectable } from '@angular/core';
import { BaseApiService } from './../../core/services/api/base-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers, Response, Request, RequestMethod, URLSearchParams, QueryEncoder } from '@angular/http';
import { Issue } from './../../models/github/issue';
import { plainToClass, plainToClassFromExist } from "class-transformer";
@Injectable()
export class IssuesService extends BaseApiService<Issue> {
  public resourceName: string = 'issues';
  constructor(protected http: Http) {
    super(http);
  }

  getIssues(queryParams?: any[]): Observable<Issue[]> {
    const url = `${this.basePath}${this.resourceName}`;

    let qencoder: QueryEncoder = new QueryEncoder();
    let params: URLSearchParams = new URLSearchParams();
    if (queryParams != undefined) {
      queryParams.forEach(param => {
        params.set(param.key, qencoder.encodeValue(param.value))
      })
    }

    return this.http.get(url, { search: params })
      .map(res => res.json())
      .map(res => plainToClassFromExist(this.entity, res as Object[]))
      .catch(this.handleError);
  }
}
