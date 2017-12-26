import { Component, OnInit } from '@angular/core';

import * as fromExercise from './reducer/exercise.reducer';
import * as actions from './reducer/exercise.actions';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Exercise } from './reducer/exercise.reducer';

@Component({
  selector: 'hdt-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises: Observable<Exercise[]>;

  constructor(private store: Store<fromExercise.State>) {
  }

  ngOnInit() {
    this.exercises = this.store.select(fromExercise.selectAll);
  }

  create(): void {
    const exercise: fromExercise.Exercise = {
      id: new Date().getUTCMilliseconds().toString(),
      description: 'test exercise',
      reps: 2,
      serie: 'A',
      sets: 1,
      tempo: '4053',
      title: 'My first exercise'
    };
    this.store.dispatch(new actions.Create(exercise));
  }

  delete(id: string): void {
    this.store.dispatch(new actions.Delete(id));
  }

}
