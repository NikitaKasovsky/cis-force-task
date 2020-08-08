import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

// Environment variables
import { environment } from '../../../../environments/environment';

// HTTP request interceptor service
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private readonly snackBar: MatSnackBar,
  ) { }

  // Base url to API
  private readonly BASE_URL = environment.host;

  // Interceptor of requests
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.applyApi(request))
      .pipe(
        catchError((error: HttpErrorResponse) => this.errorHandler(error, request, next)),
      );
  }

  // Apply api address
  private applyApi(request: HttpRequest<any>): HttpRequest<any> {
    const update = {
      url: `${this.BASE_URL}${request.url}`,
    };

    return request.clone(update);
  }

  // HTTP request error handler
  private errorHandler(
    error: HttpErrorResponse,
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    const status = error && error.status || 0;

    switch (status) {
      default:
        if (status >= 500 && status <= 599) {
          this.snackBar.open(`Err: ${error.error.message}`, 'Server error');
          break;
        }
    }

    return throwError(error);
  }
}
