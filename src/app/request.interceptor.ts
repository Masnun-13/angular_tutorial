import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request)
    if(request.method=='POST'){
      const newrequest = request.clone({headers: new HttpHeaders({'token' : "smallheadmode"})})
       return next.handle(newrequest);
    }
    else {
      return next.handle(request)
    }
  }
}
