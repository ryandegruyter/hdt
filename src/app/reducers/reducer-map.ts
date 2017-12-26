import { ActionReducerMap } from '@ngrx/store';
import { exerciseReducer } from '../exercises/reducer/exercise.reducer';

export const reducers: ActionReducerMap<any> = {
  exercise: exerciseReducer
};
