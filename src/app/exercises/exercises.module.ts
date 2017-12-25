import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';

@NgModule({
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ],
  declarations: [ExercisesComponent]
})
export class ExercisesModule {
}
