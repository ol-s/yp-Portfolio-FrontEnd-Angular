import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email = '';
  clave = '';

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);

  constructor(private formBuilder: FormBuilder, private autenticacionServ: AutenticacionService, private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]], 
    })
  }

  ngOnInit(): void {
    //sessionStorage.setItem('currentUser', "");  
  }

  // metodos para el formulario
  get Mail() { return this.loginForm.get("email"); }   //viene del html formControlName="email"
  get Password() { return this.loginForm.get("clave"); }

  get MailValid() { return this.Mail?.touched && !this.Mail?.valid; }  //metodo de validacion de mail 
  get PasswordValid() { return this.Password?.touched && !this.Password?.valid; }


  onEnviar(event: Event) {
    event.preventDefault;
    if (this.loginForm.valid) {
      //console.log(JSON.stringify(this.login_form.value));
      this.autenticacionServ.loginPersona(this.loginForm.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          alert("Sesión iniciada ✔️");
          //this.router.navigate(['portfolio']); 
          this.router.navigate(['']);  //a la pagina principal http://localhost:4200/
        } else { alert("Error al iniciar sesión. Credenciales no válidas."); } //esto no sale
      }, error => {
        alert("Error al iniciar sesión.");   //sale cuando el back is not running
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error. Validaciones incorrectas.");    //sale solo si escribis mal el mail o contasenia y estan en rojo las validaciones 21.4.23
      //this.router.navigate(['/']);
    }
  }


}



