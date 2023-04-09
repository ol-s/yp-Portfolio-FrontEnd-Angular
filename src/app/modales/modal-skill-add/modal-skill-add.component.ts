import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

///**********************************pppppppppppppppppppppppppppppppppp
//import { DatosService } from 'src/app/servicios/datos.service';
///**********************************pppppppppppppppppppppppppppppppppp

@Component({
  selector: 'app-modal-skill-add',
  templateUrl: './modal-skill-add.component.html',
  styleUrls: ['./modal-skill-add.component.css']
})

export class ModalSkillAddComponent implements OnInit {

  form: FormGroup;



  //*************************ppppppppppppppppppppp
  //id?: string;
  //categories: Category[] = [];
  //rubros : any;
  /*states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];
  <div class="row">
          <div class="col-xs">
            <mat-form-field>
              <mat-label>States</mat-label>
              <mat-select formControlName="state">
                <mat-option [value]="state" *ngFor="let state of states">
                  {{ state.name }}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
        <div class="row">
          <div class="col-xs">
            <select formControlName="state">
              <option [ngValue]="state" *ngFor="let state of states">
                {{ state.name }}
              </option>
            </select>
          </div>
        </div>
        */

  //*************************[ppppppppppppppppppppppppppppppppppp */
  //ai abajo tmb  constructor(private formBuilder: FormBuilder, private datos: DatosService)  lo de datos service agregue yo


  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      rubro: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }

  ngOnInit() { 


  }

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






  ///**********************************pppppppppppppppppppppppppppppppppp
  /*ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
   
        this.rubros = data.rubrosss

    });
  }*/
  ///**********************************pppppppppppppppppppppppppppppppppp
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