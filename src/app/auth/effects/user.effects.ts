import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as userActions from '../actions/user.actions';
import { UserAction } from '../actions/user.actions';
import { delay, map, switchMap, catchError } from 'rxjs/operators';
import { User } from '../user.model';
import { User as FirebaseUser } from 'firebase';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable()
export class UserEffects {
  constructor(private actions: Actions,
              private firebaseAuth: AngularFireAuth) {
  }

  @Effect()
  logout: Observable<UserAction> = this.actions.ofType(userActions.LOGOUT)
    .pipe(
      map((action: userActions.LogOut) => action.payload),
      switchMap(payload => {
        return fromPromise(this.firebaseAuth.auth.signOut());
      }),
      map(authData => {
        return new userActions.NotAuthenticated();
      }),
      catchError(err => {
        return of(new userActions.AuthError({error: err.message}));
      })
    );
  @Effect()
  login: Observable<UserAction> = this.actions.ofType(userActions.GOOGLE_LOGIN)
    .pipe(
      map((action: userActions.GetUser) => action.payload),
      switchMap(payload => {
        return fromPromise(this.googleLogin())
      }),
      map(credentials => {
        return new userActions.GetUser();
      }),
      catchError(err => {
        return of(new userActions.AuthError({error: err.message}));
      })
    );

  @Effect()
  getUser: Observable<UserAction> = this.actions.ofType(userActions.GET_USER).pipe(
    map((action: userActions.GetUser) => action.payload),
    switchMap(payload => this.firebaseAuth.authState),
    delay(2000),
    map((authData: FirebaseUser) => {
      if (authData) {
        const user = new User(authData.uid, authData.displayName);
        return new userActions.Authenticated(user);
      } else {
        return new userActions.NotAuthenticated();
      }
    }),
    catchError(err => of(new userActions.AuthError(err)))
  )

  private googleLogin(): Promise<any> {
    const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }
}
