import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './demo-projects/quiz-app/principal/principal.module';
import { Router, RouterModule } from '@angular/router';
import { DemoProjectsDashboardComponent } from './demo-projects/demo-projects-dashboard/demo-projects-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoProjectsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
