import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"pokedex-86525","appId":"1:832720476492:web:6b764c58afa89071ac97e9","storageBucket":"pokedex-86525.appspot.com","apiKey":"AIzaSyAw4udhSi6EHNnTmd-rvK7ta2WdTgUE-Lg","authDomain":"pokedex-86525.firebaseapp.com","messagingSenderId":"832720476492"}))
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
