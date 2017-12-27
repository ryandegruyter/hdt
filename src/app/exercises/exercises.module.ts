import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import { StoreModule } from '@ngrx/store';
import { exerciseReducer, featureNameExercise } from './reducer/exercise.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExerciseEffects } from './reducer/exercise.effects';

@NgModule({
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    StoreModule.forFeature(featureNameExercise, exerciseReducer),
    EffectsModule.forFeature([ExerciseEffects])
  ],
  declarations: [ExercisesComponent]
})
export class ExercisesModule {
}
