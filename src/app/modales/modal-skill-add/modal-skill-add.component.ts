import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-skill-add',
  templateUrl: './modal-skill-add.component.html',
  styleUrls: ['./modal-skill-add.component.css']
})

export class ModalSkillAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      rubro: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }

  ngOnInit() { }

  // metodos para el formulario
  get rubro() {
    return this.form.get("rubro");   //viene del html formControlName="", de ahi toma el dato
  }

  get nombre() {
    return this.form.get("nombre");
  }

  get porcentaje() {
    return this.form.get("porcentaje");
  }

  /* parece que no se usan (?)
   get rubroValid() {
     return this.rubro?.touched && !this.rubro?.valid;  //metodo de validacion de nombre
   }

   get nombreValid() {
     return this.nombre?.touched && !this.nombre?.valid;  
   }
 
   get porcentajeValid() {
     return this.porcentaje?.touched && !this.porcentaje?.valid;  
   }
 
*/

  limpiar(): void {
    this.form.reset();
  }


  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      alert("Validaciones correctas, ¡Enviar!")
    } else {
      this.form.markAllAsTouched();
    }
  }

}







/*
//'form' una variable, le ponemos el nombre nosotros? (h)
form: FormGroup;

// Inyectamos en el constructor el formBuilder, primer 'formBuilder' es un alias, elegimos nombre, No es el ''FormBuilder''
constructor(private formBuilder: FormBuilder) {
  ///Creamos el grupo de controles para el formulario de login
  this.form = this.formBuilder.group({
    rubroSkill: ['', [Validators.required]],
    nombreSkill: ['', [Validators.required]], 
    porcentajeSkill: ['', [Validators.required]], 
  })
}
/////////////////////////////////////////////////////////////////////////////tempoco anda el reQuired,solo el login y educacion add andan//////////////////////
ngOnInit() { }

// metodos para el formulario

get Rubro() {
  return this.form.get("RubroSkill");   //viene del html formControlName="enombre", de ahi toma el dato
}

get Nombre() {
  return this.form.get("nombre");  
}

get Porcentaje() {
  return this.form.get("PorcentajeSkill");   
}

get RubroValid() {
  return this.Rubro?.touched && !this.Rubro?.valid;  //metodo de validacion de nombre
}

get NombreValid() {
  return this.Nombre?.touched && !this.Nombre?.valid;  
}


get PorcentajeValid() {
  return this.Porcentaje?.touched && !this.Porcentaje?.valid;  
}







//ESTE USE? AGREGUE POR ULTIMO, BORRAR>  corte luz
// get PasswordinValid() {
//   return this.Password?.touched && !this.Password?.invalid;  //metodo de validacion de password
// }







 
//onenviar viene del html (ngSubmit)="onEnviar($event), podria cambiar a onIniciarSesion, compila ok
onEnviar(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault;

  if (this.form.valid) {
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Validaciones correctas, ¡Enviar formulario!")
  } else {
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched();
  }

}


}



*/