import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizAppRoutingModule } from './quiz-app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuizAppComponent } from './principal/quiz-app.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ProgressStepComponent } from './progress-step/progress-step.component';


@NgModule({
  declarations: [
    QuizAppComponent,
    ResultadosComponent,
    ProgressStepComponent
  ],
  imports: [
    CommonModule,
    QuizAppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    QuizAppComponent
  ]
})
export class quizappModule { }
