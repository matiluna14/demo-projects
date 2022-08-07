import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoProjectsDashboardComponent } from './demo-projects/demo-projects-dashboard/demo-projects-dashboard.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DemoProjectsDashboardComponent
  },

  {
    path: 'quiz',
    loadChildren: () => import('./demo-projects/quiz-app/quizapp.module').then(m => m.quizappModule)
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
