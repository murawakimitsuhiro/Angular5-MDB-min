import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ResponseModel } from '../models/response.model';

@Injectable()

export class BaseNetwork {

  baseUrl = 'http://localhost';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  get(uri, param: string = '') {
    // this.changeHostIfNeeded();
    const httpHeaders = new HttpHeaders();
    const url = this.baseUrl + uri + param;

    return this.http.get(url, {
      headers: httpHeaders,
      observe: 'response'
    }).map(response => {
      const body = new ResponseModel(response.body);
      this.routeLoginIfNeeded(body);
      return body.data;
    }).catch(err => {
      this.routeLoginIfForbiddenError(err);
      return Observable.throw(err);
    });
  }

  post(uri, param: string = '', body?: Object) {
    // this.changeHostIfNeeded()
    const httpHeaders = new HttpHeaders();
    const url = this.baseUrl + uri + param;

    return this.http.post(url, body, {
      headers: httpHeaders,
      observe: 'response'
    }).map(response => {
      const responseBody = new ResponseModel(response.body);
      this.routeLoginIfNeeded(responseBody);
      return responseBody.data;
    }).catch(err => {
      this.routeLoginIfForbiddenError(err);
      return Observable.throw(err);
    });
  }

  put(uri, param: string = '', body?: Object) {
    // this.changeHostIfNeeded()
    const httpHeaders = new HttpHeaders();
    const url = this.baseUrl + uri + param;

    return this.http.put(url, body, {
      headers: httpHeaders,
      observe: 'response'
    }).map(response => {
      const responseBody = new ResponseModel(response.body);
      this.routeLoginIfNeeded(responseBody);
      return responseBody.data;
    }).catch(err => {
      this.routeLoginIfForbiddenError(err);
      return Observable.throw(err);
    });
  }

  delete(uri, param: string = '') {
    // this.changeHostIfNeeded()
    const httpHeaders = new HttpHeaders();
    const url = this.baseUrl + uri + param;

    return this.http.delete(url, {
      headers: httpHeaders,
      observe: 'response'
    }).map(response => {
      const body = new ResponseModel(response.body);
      this.routeLoginIfNeeded(body);
    }).catch(err => {
      this.routeLoginIfForbiddenError(err);
      return Observable.throw(err);
    });
  }

  private routeLoginIfNeeded(response: ResponseModel) {
    if (response.error === 'wrong session') {
      this.routeLogin();
    }
  }

  private routeLoginIfForbiddenError(response: HttpErrorResponse) {
    if (response.status === 403) {
      this.routeLogin();
    }
  }

  private routeLogin() {
    this.router.navigate(['/login']);
  }

  // private changeHostIfNeeded() {
  //   this.baseUrl = localStorage.getItem('base-url') || 'https://api.forits.jp:3000/';
  // }
}
