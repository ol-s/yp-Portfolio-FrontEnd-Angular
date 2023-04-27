//////////////////////////////anda el login con modal, use el component logout que yano servia, pero anda bien 21-4-23/////////////

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  //'loginform' es variable, le ponemos el nombre nosotros
  loginForm: FormGroup;

  email = '';
  clave = '';

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);

  constructor(private formBuilder: FormBuilder, private autenticacionServ: AutenticacionService, private router: Router) {

    ///Creamos el grupo de controles para el formulario de login
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(4)]],  //1234 puse contrasenia via phpmyadmin 
    })
  }

  ngOnInit(): void {
    //sessionStorage.setItem('currentUser', "");  //esto no esta en el word que circula ab login
  }

  // metodos para el formulario
  get Mail() { return this.loginForm.get("email"); }   //viene del html formControlName="email", de ahi toma el dato
  get Password() { return this.loginForm.get("clave"); }    //viene del html formControlName="clave", de ahi toma el dato

  get MailValid() { return this.Mail?.touched && !this.Mail?.valid; }  //metodo de validacion de mail 
  get PasswordValid() { return this.Password?.touched && !this.Password?.valid; } //metodo de validacion de password





  onEnviarModal(event: Event) {
    event.preventDefault;
    if (this.loginForm.valid) {
      //console.log(JSON.stringify(this.login_form.value));
      this.autenticacionServ.loginPersona(this.loginForm.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          window.location.reload();
          alert("Sesión iniciada CON MODAL ✔️"); 
          this.router.navigate(['']);  
        } else { alert("Error al iniciar sesión. Credenciales no válidas!!!");} //esto no sale
      }, error => {
        alert("Error al iniciar sesión!!!");   ///21-4-23 LPM, ESTO ANTES SALIA Y AHORA NO
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! Validaciones incorrectas");          ///21-4-23 esto sale SOLO si escribis mal el mail o contasenia y estan en rojo las validaciones
      //this.router.navigate(['/']);
    }
  }

}


/*  MODAL LOGOUT ERA, LO USO PARA PROBAR LOGIN EN MODAL 21-4-23

import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

}
*/
