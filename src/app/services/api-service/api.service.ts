import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IApiArticle, IApiResponse, IKeyValue } from '../../shared/interfaces/api/api.interface';
import { Article } from '../../shared/classes/article.class';
import { environment } from '../../../environments/environment';

export const queryParamsMap = {
  country: 'country',
  category: 'category',
  search: 'q',
  listSize: 'pageSize',
}

export const httpHeadersMap = {
  apiKey: 'X-Api-Key',
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private _http: HttpClient,
  ) { }

  public getData(country?: string, searchTerm?: string, category?: string, listSize?: number): Observable<Article[]> {
    // Set headers
    const httpHeaders = this._setHeaders([
      { key: httpHeadersMap.apiKey, value: environment.apiKey },
    ]);

    // Set params
    const httpParams = this._setParams([
      { key: queryParamsMap.country, value: country },
      { key: queryParamsMap.search, value: searchTerm },
      { key: queryParamsMap.category, value: category },
      { key: queryParamsMap.listSize, value: listSize },
    ]);

    return this._getApiData(httpHeaders, httpParams);
  }

  // Send request with header and params
  private _getApiData(headers: HttpHeaders, params?: HttpParams) {
    return this._http.get<IApiResponse>(`${environment.apiBase}/top-headlines`, { headers: headers, params: params })
      .pipe(map(data => data.articles.map((item: IApiArticle, idx: number) => new Article(item, idx + 1))));
  }

  private _setHeaders(args: IKeyValue[]): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    args.forEach(arg => {
      if (!!arg.key && !!arg.value) {
        httpHeaders = httpHeaders.append(arg.key, arg.value);
      }
    });
    return httpHeaders;
  }

  private _setParams(args: IKeyValue[]): HttpParams {
    let httpParams = new HttpParams();
    args.forEach(param => {
      if (!!param.key && !!param.value) {
        httpParams = httpParams.append(param.key, param.value);
      }
    });
    return httpParams;
  }
}
