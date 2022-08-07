import { Component, OnInit } from '@angular/core';
import { QuizappService } from '../services/quizapp.service';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
  styleUrls: ['./progress-step.component.css']
})
export class ProgressStepComponent implements OnInit {

  constructor( private quizappService: QuizappService) { }

  porcentajeProgressBar: number = 0;

  ngOnInit(): void {
   
  }


  calcularPorcentajeProgressBar(){
    const current = this.quizappService.obtenerCurrent();
    const cantPreguntas = this.quizappService.obtenerCantPreguntas();

    this.porcentajeProgressBar = (current / cantPreguntas) * 100;

    return `${this.porcentajeProgressBar}%`;
  }





}
