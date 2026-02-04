import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { PrimeNG_Preset } from './primeng-preset';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    providePrimeNG({
      theme: {
        preset: PrimeNG_Preset,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
