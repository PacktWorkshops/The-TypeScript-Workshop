import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('/api/')) {
      return next.handle(req);
  }

    const relativeUrl = req.url.replace('/api/', '');
    const newRequest = req.clone({ url: `https://jsonplaceholder.typicode.com/${relativeUrl}` });

    return next.handle(newRequest);
  }
}
