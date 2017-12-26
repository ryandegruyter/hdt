import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CREATE, Create, DELETE, ExerciseActions, Update, UPDATE } from './exercise.actions';
import { createFeatureSelector } from '@ngrx/store';

export const featureNameExercise: string = 'exercise';

export interface Exercise {
  id: string;
  serie: string;
  reps: number;
  sets: number;
  tempo: string;
  description: string;
  title: string;
}

export const exerciseAdapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>();

export interface State extends EntityState<Exercise> {
}

export const initialExerciseState: State = exerciseAdapter.getInitialState({
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      title: 'hello'
    }
  }
});

export function exerciseReducer(state: State = initialExerciseState,
                                action: ExerciseActions) {
  switch (action.type) {
    case CREATE:
      return exerciseAdapter.addOne((action as Create).exercise, state);
    case UPDATE:
      return exerciseAdapter.updateOne({
        id: (action as Update).id,
        changes: (action as Update).changes
      }, state);
    case DELETE:
      return exerciseAdapter.removeOne((action as Update).id, state);
    default:
      return state;
  }
}

export const getExerciseState = createFeatureSelector<State>(featureNameExercise);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = exerciseAdapter.getSelectors(getExerciseState);
