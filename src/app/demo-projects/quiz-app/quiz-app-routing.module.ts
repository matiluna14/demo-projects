import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAppComponent } from './principal/quiz-app.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [

  {
    path: '',
    children: [

      { path: 'principal', component: QuizAppComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: '**', redirectTo: 'principal'}
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizAppRoutingModule { }
