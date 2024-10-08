import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';
import { MaterialModule } from './material-module';

// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http);
// }
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        provideClientHydration(),
        provideAnimationsAsync(),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        }),
        provideHttpClient(withFetch()),
        importProvidersFrom(
            // TranslateModule.forRoot({
            //     loader: {
            //         provide: TranslateLoader,
            //         useFactory: HttpLoaderFactory,
            //         deps: [HttpClient]
            //     }
            // }),
            // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
            // NgxUiLoaderRouterModule,
            MaterialModule,
            // NgxPaginationModule,
            // NgxFullCalendarModule,
            RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled', // Restaure la position de défilement
                anchorScrolling: 'enabled', // Active le défilement par ancre
            }),
        ), 
        provideAnimationsAsync(), provideAnimationsAsync(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
    ]
};
