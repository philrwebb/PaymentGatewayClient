/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BankStatementDto } from '../models/bank-statement-dto';

@Injectable({
  providedIn: 'root',
})
export class BankStatementService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiBankStatementIdGet
   */
  static readonly ApiBankStatementIdGetPath = '/api/BankStatement/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankStatementIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankStatementIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<BankStatementDto>> {

    const rb = new RequestBuilder(this.rootUrl, BankStatementService.ApiBankStatementIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankStatementDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBankStatementIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankStatementIdGet$Plain(params: {
    id: string;
  }): Observable<BankStatementDto> {

    return this.apiBankStatementIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BankStatementDto>) => r.body as BankStatementDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankStatementIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankStatementIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<BankStatementDto>> {

    const rb = new RequestBuilder(this.rootUrl, BankStatementService.ApiBankStatementIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BankStatementDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiBankStatementIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankStatementIdGet$Json(params: {
    id: string;
  }): Observable<BankStatementDto> {

    return this.apiBankStatementIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BankStatementDto>) => r.body as BankStatementDto)
    );
  }

}
