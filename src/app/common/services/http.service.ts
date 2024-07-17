import { HttpClient, HttpErrorResponse, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviornment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService<T> {

  private readonly baseUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.baseUrl = environment.apiUrl;
  }

  public get(route: string, params?: object): Observable<T> {
    let url = this.baseUrl + route;
    if (params) {
      let options: {
        params: HttpParams
      } = { params: this.getHttpParams(params)};
      return this.http.get<T>(url, options)
      .pipe(
        catchError(this.handleError)
      );
    }
    else{
      return this.http.get<T>(url)
      .pipe(
        catchError(this.handleError)
      );
    }
  }

  public post(route: string, data: any, params?: object): Observable<T> {
    let url = this.baseUrl + route;
    let options: any = {};
    if (params) {
      options.params = params ? this.getHttpParams(params) : undefined;
      return this.http.post<T>(url, data)
      .pipe(
        catchError(this.handleError)
      );
    }
    else{
      return this.http.post<T>(url, data)
      .pipe(
        catchError(this.handleError)
      );
    }
  }

  private addHttpParams(paramList: HttpParams, key: string, value: any) {
    return paramList.append(key, value);
  }

  private getHttpParams(params: {[key: string]: any}) {
    let paramList = new HttpParams();
    Object.keys(params).forEach((key) => {
      paramList = this.addHttpParams(paramList, key, params[key]);
    });

    return paramList;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
