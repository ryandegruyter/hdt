import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET, GET_SUCCESS, GetSuccess } from './exercise.actions';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Exercise } from './exercise.reducer';
import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Injectable()
export class ExerciseEffects {
  constructor(private actions: Actions,
              private fireStore: AngularFirestore) {

  }

  @Effect()
  queryAll: Observable<GetSuccess> =
    this.actions.ofType(GET).pipe(
      switchMap(() => this.fireStore.collection<Exercise>('exercises').stateChanges()),
      tap(val => console.log('first', val)),
      mergeMap(actions => actions),
      tap(val => console.log('second', val)),
      map((val: DocumentChangeAction) => {
        return {
          type: GET_SUCCESS,
          payload: {
            ...val.payload.doc.data(),
            id: val.payload.doc.id
          }
        } as GetSuccess;
      }),
    )
  // @Effect()
  // getExercise: Observable<ExerciseActions> =
  //   this.actions.ofType(exerciseActions.GET)
  //     .pipe(
  //       map((action: exerciseActions.Get) => action.payload),
  //       mergeMap(payload => this.db.object<Exercise>(payload)),
  //       map((exercise) => {
  //         exercise.pushKey = exercise.$key;
  //         return new exerciseActions.GetSuccess(exercise);
  //       })
  //     )
}
