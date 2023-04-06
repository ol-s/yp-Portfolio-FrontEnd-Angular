import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //'form' una variable, le ponemos el nombre nosotros? (h)
  form: FormGroup;

  // Inyectamos en el constructor el formBuilder, primer 'formBuilder' es un alias, elegimos nombre, No es el ''FormBuilder''
  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],  //compila con la coma ahi...     
    })
  }

  ngOnInit() { }

  // metodos para el formulario

  get Mail() {
    return this.form.get("email");   //viene del html formControlName="email", de ahi toma el dato
  }

  get Password() {
    return this.form.get("password");    //viene del html formControlName="password", de ahi toma el dato
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;  //metodo de validacion de mail
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;  //metodo de validacion de password
  }










  get PasswordinValid() {
    return this.Password?.touched && !this.Password?.invalid;  //metodo de validacion de password
  }







  
  //onenviar viene del html (ngSubmit)="onEnviar($event), podria cambiar a onIniciarSesion, compila ok
  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Validaciones correctas, ¡Iniciar Sesión!")
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
    }

  }


}

// https://stackblitz.com/edit/argentinaprograma-intro-formularios-awfgry?file=src%2Fapp%2Flogin%2Flogin.component.html
