import { Action } from '@ngrx/store';

const prefix: string = '[User]';

export const GET_USER = `${prefix} get`;
export const AUTHENTICATED = `${prefix} authenticated`;
export const NOT_AUTHENTICATED = `${prefix} not authenticated`;

export const GOOGLE_LOGIN = `${prefix} Google Login`;
export const LOGOUT = `${prefix} Logout`;

export const AUTH_ERROR = `${prefix} Auth error`;

export class GetUser implements Action {
  type: string = GET_USER;

  constructor(public payload?: any) {
  }
}

export class Authenticated implements Action {
  type: string = AUTHENTICATED;

  constructor(public payload?: any) {
  }
}

export class NotAuthenticated implements Action {
  type: string = NOT_AUTHENTICATED;

  constructor(public payload?: any) {
  }
}

export class GoogleLogin implements Action {
  type: string = GOOGLE_LOGIN;

  constructor(public payload?: any) {
  }
}

export class LogOut implements Action {
  type: string = LOGOUT;

  constructor(public payload?: any) {
  }
}

export class AuthError implements Action {
  type: string = AUTH_ERROR;

  constructor(public payload?: any) {
  }
}

export type UserAction = GetUser
  | Authenticated
  | NotAuthenticated
  | AuthError
  | GoogleLogin
  | LogOut
