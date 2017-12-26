import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import { StoreModule } from '@ngrx/store';
import { exerciseReducer, featureNameExercise } from './reducer/exercise.reducer';

@NgModule({
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    StoreModule.forFeature(featureNameExercise, exerciseReducer)
  ],
  declarations: [ExercisesComponent]
})
export class ExercisesModule {
}
