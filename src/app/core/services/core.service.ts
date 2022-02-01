// Angular
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// Models
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable()
export class CoreHttpClientService {
  /**
   * Service Constructor
   *
   * @param http: HttpClient
   */
  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  private apiUrl: string = environment.baseUrl;

  get(_path: string): any {
    const path: string = this.apiUrl + _path;
    return this.http.get(path);
  }

  getFilter(_path: string, _params: HttpParams): any {
    const path: string = this.apiUrl + _path;
    return this.http.get(path, { params: _params });
  }

  post<T>(_path: string, _data: any): Observable<T> {
    const path: string = this.apiUrl + _path;
    return this.http.post<any>(path, _data);
  }

  put<T>(_path: string, _data: any): Observable<T> {
    const path: string = this.apiUrl + _path;
    return this.http.put<any>(path, _data);
  }

  delete<T>(_path: string): Observable<T> {
    const path: string = this.apiUrl + _path;
    return this.http.delete<any>(path);
  }

  handleSuccess<T>(response: any) {
    if (!response.Status) throw response.Message;
    return response.Result as T;
  }

  handleError(err: any) {
    if (err instanceof HttpErrorResponse && err.status === 401) {
      this.router.navigate(['/dashboard']); // normally logout
    } else if (err instanceof HttpErrorResponse && err.status === 404) {
      // return not found
    }
    let error_message = '';

    if (err) {
      error_message = err;
    } else {
      error_message = 'Something went wrong';
    }
    this.snackBar.open(error_message, '', {
      duration: 3000,
    });
    throw err;
  }
}
