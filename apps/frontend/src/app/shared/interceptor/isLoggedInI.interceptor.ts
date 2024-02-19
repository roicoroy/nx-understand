import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { environment } from 'src/environments/environment';
import { AlertService } from '../services/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInInterceptor implements HttpInterceptor {

  private store = inject(Store);

  private alert = inject(AlertService);

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (request.url.indexOf(environment.MEDUSA_API_BASE_PATH) === 0) {
      const clonedReq = this.isLoggedIn(request);
      return next.handle(clonedReq) || null;
    }

    return next.handle(request) || null;
  }

  private isLoggedIn(request: HttpRequest<any>) {
    const isLoggedIn = this.store.selectSnapshot(AuthState.isLoggedIn);
    if (!isLoggedIn) {
      this.alert.presentSimpleAlertNavigate('Sorry, need to login first', 'login');
    }
    return request;
  }

}