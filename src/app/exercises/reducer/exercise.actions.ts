import { Action } from '@ngrx/store';
import { Exercise } from './exercise.reducer';

const prefix: string = '[Exercise] ';

export const CREATE = `${prefix} create`;
export const UPDATE = `${prefix} update`;
export const DELETE = `${prefix} delete`;

export class Create implements Action {

  type: string = CREATE;

  constructor(public exercise: Exercise) {
  }
}

export class Update implements Action {
  type: string = UPDATE;

  constructor(public id: string,
              public changes: Partial<Exercise>) {
  }
}

export class Delete implements Action {
  type: string = DELETE;

  constructor(public id: string) {
  }
}

export type ExerciseActions
  = Create
  | Update
  | Delete
