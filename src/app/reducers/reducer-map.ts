import { ActionReducerMap } from '@ngrx/store';
import { exerciseReducer } from '../exercises/reducer/exercise.reducer';
import { userReducer } from '../auth/reducers/user.reducer';

export const reducers: ActionReducerMap<any> = {
  exercise: exerciseReducer,
  user: userReducer
};
