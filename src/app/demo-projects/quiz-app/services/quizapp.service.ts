import { Injectable } from '@angular/core';
import { QuizData } from '../interfaces/quizAppInterfaces';

@Injectable({
  providedIn: 'root'
})
export class QuizappService {

  constructor() { }

  score: number = 0; //lleva la cantidad de respuestas correctas contestadas por el usuario
  current: number = 0; //puntero al elemento actual del quizArray
  porcentajeAcierto: number = 0;

  quizArray: QuizData[] = [

    {
      question: "¿Cuál de estos lenguajes puede correr en un navegador web?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },

    {
      question: "¿Qué significa CSS?",
      a: "Central Styles Sheet",
      b: "Cascading Styles Sheet",
      c: "Cascading Simple Sheet",
      d: "Cars Suv Sailboats",
      correct: "b"
    },

    {
      question: "¿Qué significa HTML?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminal Motorboats Lamborginis",
      correct: "a"
    },

    {
      question: "¿En qué año fue lanzado JavaScript?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "ninguno de los anteriores",
      correct: "b"
    }

  ];



  obtenerQuizArray(){
    return this.quizArray;
  }

  obtenerCurrent(){
    return this.current;
  }

  aumentarCurrent(){
    this.current++;
  }

  resetearCurrent(){
    this.current = 0;
  }


  aumentarScore(){
    this.score++;
  }

  resetearScore(){
    this.score = 0;
  }

  obtenerScore(){
    return this.score;
  }


  obtenerPorcentajeDeAcierto(){
    this.porcentajeAcierto = (this.score / this.quizArray.length)*100;
    return this.porcentajeAcierto;
  }

  obtenerCantPreguntas(){
    return this.quizArray.length;
  }

  ReiniciarTest(){
    this.resetearScore();
    this.resetearCurrent();
    
  }


}
