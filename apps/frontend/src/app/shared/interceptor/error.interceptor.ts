import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { AlertService } from '../services/alert/alert.service';
import { Store } from '@ngxs/store';
import { CartActions } from 'src/app/store/cart/cart.actions';
import { PaymentActions } from 'src/app/store/payment/payment.actions';
import { StateClear } from 'ngxs-reset-plugin';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    private alert = inject(AlertService);

    private store = inject(Store);

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse | HttpResponseBase | any) => {
                    switch (error.status) {
                        case 400:
                            if (error.error.type.includes('invalid_data')) {
                                // this.alert.presentSimpleAlert(error.error.message);
                                this.alert.presentSimpleAlertNavigate(error.message, 'login').then(() => {
                                    // this.store.dispatch(new StateClear());
                                    console.log('state cleared');
                                });
                                return throwError(() => error);
                            }
                            if (error.error.code?.includes('payment_intent_unexpected_state')) {
                                this.alert.presentSimpleAlertNavigate(error.message, 'login').then(() => {
                                    this.store.dispatch(new StateClear());
                                    console.log('state cleared');

                                });
                                return throwError(() => error);
                            } else {
                                return throwError(() => error);
                            }
                        case 401:
                            this.alert.presentSimpleAlertNavigate(error.message, 'login');
                            return throwError(() => error);
                        case 403:
                            throwError(() => error);
                            break;
                        case 404:
                            if (error.message) {
                                this.alert.presentSimpleAlert(error.message);
                            }
                            else {
                                throwError(() => error);
                            }
                            break;
                        default:
                            throwError(() => error);
                            break;
                    }
                })
            )
    }
}
