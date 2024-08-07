import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-t-quan',
        appId: '1:929198429851:web:1bee38015166d8547b183e',
        storageBucket: 'fir-t-quan.appspot.com',
        apiKey: 'AIzaSyAAIETPmaXHlO6Fy70VTdvJNm03TrcdqIo',
        authDomain: 'fir-t-quan.firebaseapp.com',
        messagingSenderId: '929198429851',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
