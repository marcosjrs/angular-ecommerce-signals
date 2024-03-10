import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(catchError(handleErrorResponse));
};

function handleErrorResponse( error: HttpErrorResponse): ReturnType<typeof throwError> {
  return throwError( ()=>`Error code: ${error.status}, message: ${error.message}` )
}

