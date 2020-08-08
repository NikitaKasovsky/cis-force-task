import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClassProvider } from '@angular/core';

// Services
import { HttpInterceptorService } from './http-interceptor.service';

// Http interceptor service provider
export const httpInterceptorProvider: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true,
};
