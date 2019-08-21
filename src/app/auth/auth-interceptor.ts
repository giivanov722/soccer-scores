import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if ((!req.url.includes('/event/')) && (!req.url.includes('/user/'))) {
      console.log('im in intercept default');
      return next.handle(req);
    }
    console.log('im in intercept rquest clone');
    const token = this.authService.getToken();
    const request = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(request);
  }
}
