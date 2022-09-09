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

import { CreditCardTransactionDto } from '../models/credit-card-transaction-dto';

@Injectable({
  providedIn: 'root',
})
export class CreditCardTransactionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCreditCardTransactionGet
   */
  static readonly ApiCreditCardTransactionGetPath = '/api/CreditCardTransaction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreditCardTransactionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionGet$Plain$Response(params?: {
    callerReference?: string;
    settlementDate?: string;
    requestDate?: string;
    status?: string;
    transmittedDate?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<CreditCardTransactionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CreditCardTransactionService.ApiCreditCardTransactionGetPath, 'get');
    if (params) {
      rb.query('callerReference', params.callerReference, {});
      rb.query('settlementDate', params.settlementDate, {});
      rb.query('requestDate', params.requestDate, {});
      rb.query('status', params.status, {});
      rb.query('transmittedDate', params.transmittedDate, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CreditCardTransactionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreditCardTransactionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionGet$Plain(params?: {
    callerReference?: string;
    settlementDate?: string;
    requestDate?: string;
    status?: string;
    transmittedDate?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<CreditCardTransactionDto>> {

    return this.apiCreditCardTransactionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CreditCardTransactionDto>>) => r.body as Array<CreditCardTransactionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreditCardTransactionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionGet$Json$Response(params?: {
    callerReference?: string;
    settlementDate?: string;
    requestDate?: string;
    status?: string;
    transmittedDate?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<StrictHttpResponse<Array<CreditCardTransactionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CreditCardTransactionService.ApiCreditCardTransactionGetPath, 'get');
    if (params) {
      rb.query('callerReference', params.callerReference, {});
      rb.query('settlementDate', params.settlementDate, {});
      rb.query('requestDate', params.requestDate, {});
      rb.query('status', params.status, {});
      rb.query('transmittedDate', params.transmittedDate, {});
      rb.query('pageNumber', params.pageNumber, {});
      rb.query('pageSize', params.pageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CreditCardTransactionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreditCardTransactionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionGet$Json(params?: {
    callerReference?: string;
    settlementDate?: string;
    requestDate?: string;
    status?: string;
    transmittedDate?: string;
    pageNumber?: number;
    pageSize?: number;
  }): Observable<Array<CreditCardTransactionDto>> {

    return this.apiCreditCardTransactionGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CreditCardTransactionDto>>) => r.body as Array<CreditCardTransactionDto>)
    );
  }

  /**
   * Path part for operation apiCreditCardTransactionIdGet
   */
  static readonly ApiCreditCardTransactionIdGetPath = '/api/CreditCardTransaction/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreditCardTransactionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CreditCardTransactionDto>> {

    const rb = new RequestBuilder(this.rootUrl, CreditCardTransactionService.ApiCreditCardTransactionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreditCardTransactionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreditCardTransactionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionIdGet$Plain(params: {
    id: string;
  }): Observable<CreditCardTransactionDto> {

    return this.apiCreditCardTransactionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreditCardTransactionDto>) => r.body as CreditCardTransactionDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCreditCardTransactionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<CreditCardTransactionDto>> {

    const rb = new RequestBuilder(this.rootUrl, CreditCardTransactionService.ApiCreditCardTransactionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreditCardTransactionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCreditCardTransactionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCreditCardTransactionIdGet$Json(params: {
    id: string;
  }): Observable<CreditCardTransactionDto> {

    return this.apiCreditCardTransactionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CreditCardTransactionDto>) => r.body as CreditCardTransactionDto)
    );
  }

}
