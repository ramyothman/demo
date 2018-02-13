import { Injectable } from '@angular/core';
import { BaseApiService } from './../core/services/api/base-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers, Response, Request, RequestMethod, URLSearchParams } from '@angular/http';
export class ProjectProcessWorkflowType {
  ProjectProcessWorkflowTypeID: number;
  Name: string;
}

@Injectable()
export class TestSService extends BaseApiService<ProjectProcessWorkflowType> {
  public resourceName: string = 'project-management/ProjectProcessWorkflowType';
  constructor(protected http: Http) {
    super(http);
  }

}
