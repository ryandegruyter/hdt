import {
  AUTH_ERROR, AUTHENTICATED, GET_USER, GOOGLE_LOGIN, NOT_AUTHENTICATED,
  UserAction
} from '../actions/user.actions';
import { User } from '../user.model';

export const featureNameUser: string = 'user';


const defaultUser = new User(null, 'GUEST');

export function userReducer(state: User = defaultUser, action: UserAction) {
  switch (action.type) {
    case GET_USER:
      return {...state, loading: true};
    case AUTHENTICATED:
    case AUTH_ERROR:
      return {...state, ...action.payload, loading: false};
    case NOT_AUTHENTICATED:
      return {...state, ...defaultUser, loading: false};
    case GOOGLE_LOGIN:
      return {...state, loading: true};
    default:
      return state;
  }
}
