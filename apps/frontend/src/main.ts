import { LOCALE_ID, enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { environment } from './environments/environment';
import { IMAGE_CONFIG } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Custom Elements
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
// 
// Borwser Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEn, 'en');
registerLocaleData(localePt, 'pt');
// Swiper
import { register } from 'swiper/element/bundle';
register();
// Storage
import { IonicStorageModule } from '@ionic/storage-angular';
// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicModule } from '@ionic/angular';
// NGXS
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      // https://angular.io/guide/image-directive
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    },
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
    provideAnimationsAsync(),
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot(),
      HttpClientModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        },
        defaultLanguage: 'en'
      }),
      IonicStorageModule.forRoot(),
      NgxsModule.forRoot([
      ]),
      NgxsResetPluginModule.forRoot(),
      NgxsFormPluginModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot({ disabled: false }),
      NgxsLoggerPluginModule.forRoot({ disabled: true }),
      NgxsStoragePluginModule.forRoot({
        key: [
        ]
      }),
    ),
  ],
});
