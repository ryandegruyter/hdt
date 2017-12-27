import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/reducer-map';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment.dev';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
