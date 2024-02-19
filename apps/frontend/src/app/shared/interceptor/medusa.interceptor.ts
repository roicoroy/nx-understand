
import { HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthState } from 'src/app/store/auth/auth.state';
import { Store } from '@ngxs/store';

@Injectable({
    providedIn: 'root'
})
export class MedusaInterceptor implements HttpInterceptor {

    private store = inject(Store);

    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        if (request.url.indexOf('../assets/i18n/en.json') === 0) {
            const clonedReq = request;
            return next.handle(clonedReq) || null;
        }
        if (request.url.indexOf(environment.MEDUSA_API_BASE_PATH) === 0) {
            const clonedReq = this.medusaRequest(request);
            return next.handle(clonedReq) || null;
        }
        return next.handle(request) || null;
    }
    private medusaRequest(request: HttpRequest<any>) {
        const token = this.store.selectSnapshot(AuthState.getToken);
        if (token) {
            const clone: HttpRequest<any> = request.clone({
                headers: new HttpHeaders({
                    'charset': 'utf-8',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`
                }),
                withCredentials: true,
            });
            return clone;
        } else {
            const clone: HttpRequest<any> = request.clone({
                headers: new HttpHeaders({
                    'charset': 'utf-8',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Accept": "application/json",
                }),
                withCredentials: true,
            });
            return clone;
        }
    }
}
