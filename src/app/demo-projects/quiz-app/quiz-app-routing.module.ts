import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAppComponent } from './principal/quiz-app.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ProgressStepComponent } from './progress-step/progress-step.component';

const routes: Routes = [

  {
    path: '',
    children: [

      { path: 'principal', component: QuizAppComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: 'progress-step', component: ProgressStepComponent},
      { path: '**', redirectTo: 'principal'}
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizAppRoutingModule { }
