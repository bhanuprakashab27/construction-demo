import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient()]
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',  // always scroll to top
        anchorScrolling: 'enabled'         // allow fragment anchor scroll
      })
    ),
    provideHttpClient()
  ]
};