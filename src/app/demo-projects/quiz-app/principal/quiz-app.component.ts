import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizData } from '../interfaces/quizAppInterfaces';
import { QuizappService } from '../services/quizapp.service';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.css']
})
export class QuizAppComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private quizappService: QuizappService) { }

  quizArray: QuizData[] = []; //array de preguntas y respuestas
  
  //este formulario sirve para obtener la respuesta que marca el usuario en los radio inputs
  miFormulario: FormGroup = this.fb.group({
    respuesta: ['', Validators.required]  
  });


  current: number = 0; //puntero al elemento actual del quizArray
  

  pregunta: string = "";
  opcion1: string = "";
  opcion2: string = "";
  opcion3: string = "";
  opcion4: string = "";



  

  ngOnInit(): void {
    this.obtenerQuizArray();
    this.loadPreguntas();
    
  }






  obtenerQuizArray(){
    this.quizArray = this.quizappService.obtenerQuizArray();
    
  }

  obtenerCurrent(){
    this.current = this.quizappService.obtenerCurrent();
  }

  aumentarCurrent(){
    this.quizappService.aumentarCurrent();
  }


  loadPreguntas(){
    
    this.clearRadios();

    this.pregunta = this.quizArray[this.current].question;
    this.opcion1 = this.quizArray[this.current].a;
    this.opcion2 = this.quizArray[this.current].b;
    this.opcion3 = this.quizArray[this.current].c;
    this.opcion4 = this.quizArray[this.current].d;

  }



  clearRadios(){
    this.miFormulario.reset();
  }

  enviar(){

    const {respuesta} = this.miFormulario.value;
    console.log(respuesta)

    if( respuesta === null){
      this.miFormulario.invalid;
      return;
    }else{
      this.miFormulario.valid;
    }
    

    if( respuesta === this.quizArray[this.current].correct ){
      console.log("Tu respuesta es correcta");
      this.quizappService.aumentarScore();
    }else{
      console.log("Tu respuesta es incorrecta")
    }
    
    console.log( this.quizappService.obtenerScore() )

    this.aumentarCurrent();
    this.obtenerCurrent();

    if( this.current < this.quizArray.length ){
      
      this.loadPreguntas();
    } else{
      console.log('FIN');
      this.router.navigateByUrl('/quiz/resultados')
    }


    
    

    

  }





}
