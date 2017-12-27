import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { featureNameUser, userReducer } from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { UserComponent } from './user.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(featureNameUser,
      userReducer),
    EffectsModule.forFeature([UserEffects]),
    AngularFireAuthModule
  ],
  declarations: [UserComponent]
})
export class AuthModule {
}
