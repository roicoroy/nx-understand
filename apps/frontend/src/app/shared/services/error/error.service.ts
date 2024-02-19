import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { ErrorLoggingActions } from 'src/app/store/error-logging/error-logging.actions';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private store = inject(Store);
  
  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
        console.log('Backend response', error);
        return throwError(error.error);
    }
    // return an observable with a user-facing error message
    return throwError({message: 'Something bad happened; please try again later.'});
  }
  
  setError(error):Observable<never> {
    const err = throwError(() => error);
    this.store.dispatch(new ErrorLoggingActions.LogErrorEntry(err));
    return error;
  }
}
