import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizappService } from '../services/quizapp.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private quizappService: QuizappService,
              private router: Router) { }

  score: number = 0;
  cantPreguntas: number = 0;
  porcentajeAcierto: number = 0;


  ngOnInit(): void {
    this.obtenerScore();
    this.obtenerPorcentajeDeAcierto();
    this.obtenerCantPreguntas();
  }

  obtenerScore(){
    this.score = this.quizappService.obtenerScore();
  }

  obtenerPorcentajeDeAcierto(){
    this.porcentajeAcierto = this.quizappService.obtenerPorcentajeDeAcierto();
  }

  obtenerCantPreguntas(){
    this.cantPreguntas = this.quizappService.obtenerCantPreguntas();
  }


  reiniciarTest(){
    this.quizappService.ReiniciarTest();
    this.router.navigateByUrl('/quiz/principal');
  }

}
