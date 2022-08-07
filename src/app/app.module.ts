import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { DemoProjectsDashboardComponent } from './demo-projects/demo-projects-dashboard/demo-projects-dashboard.component';
import { quizappModule } from './demo-projects/quiz-app/quizapp.module';




@NgModule({
  declarations: [
    AppComponent,
    DemoProjectsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    quizappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
