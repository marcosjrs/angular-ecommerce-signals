import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { ErrorResponseInterceptor } from '@shared/interceptors/error-response.interceptor';
import { SpinnerInterceptor } from '@shared/interceptors/spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
        provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([ErrorResponseInterceptor, SpinnerInterceptor])
    ),
  ],
};
