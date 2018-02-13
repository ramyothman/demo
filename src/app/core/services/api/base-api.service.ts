import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, Request, RequestMethod, URLSearchParams, QueryEncoder } from '@angular/http';
import * as Rx from 'rxjs';
import { IApi } from './i-api.interface';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/Rx';
import { AppSettings } from './../../../settings/app/app.settings';
// import { API_ORIGIN_URL } from './../api-baseurl.constants';
import { plainToClass, plainToClassFromExist } from "class-transformer";

@Injectable()
export abstract class BaseApiService<T> implements IApi<T> {
  public keyName: string = 'ID';
  public resourceName: string = 'resource';
  protected headers = new Headers({ 'Content-Type': 'application/json' });
  protected headersPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  protected basePath = AppSettings.API_Url;
  protected entity: T;
  constructor(protected http: Http) {
    
  }

  get(queryParams?: any[]): Observable<T[]> {
    const url = `${this.basePath}${this.resourceName}/getall`;

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

  getById(id: number): Observable<T> {
    const url = `${this.basePath}${this.resourceName}/getbyid/` + id;
    return this.http.get(url)
      .map(res => res.json())
      .map(res => plainToClassFromExist(this.entity, res as Object))
      .catch(this.handleError);
  }

  delete(id: number): Observable<{}> {
    const url = `${this.basePath}${this.resourceName}/delete/` + id;
    return this.http.post(url, JSON.stringify({ ID: id }), { headers: this.headers })
      .catch(this.handleError);
  }

  save(item?: T, queryParams?: any[]): Observable<T> {
    const url = `${this.basePath}${this.resourceName}/save`;

    return this.http.post(url, JSON.stringify(item), { headers: this.headers })
      .map(res => res.json())
      .map(res => plainToClassFromExist(this.entity, res as Object))
      .catch(this.handleError);
  }

  public getNewId() {
    return 0;
  }

  protected handleError(error: Response) {
    console.error(error);
    return Rx.Observable.throw(error.json().error || 'Server error');
  }

}
