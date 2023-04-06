  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-modal-skill-edit',
    templateUrl: './modal-skill-edit.component.html',
    styleUrls: ['./modal-skill-edit.component.css']
  })
  
  export class ModalSkillEditComponent implements OnInit {  
     
      form: FormGroup;
    
      constructor(private formBuilder: FormBuilder) {
     
        this.form = this.formBuilder.group({
          //rubro: ['', [Validators.required]],
          nombre: ['', [Validators.required]],
          porcentaje: ['', [Validators.required]]  
        })
      }
    
      ngOnInit() { }
    
      // metodos para el formulario
      /*get rubro() {
        return this.form.get("rubro");   //viene del html formControlName="", de ahi toma el dato
      }*/
  
      get nombre() {
        return this.form.get("nombre"); 
      }
  
      get porcentaje() {
        return this.form.get("porcentaje");  
      }
    
     
      /*get rubroValid() {
        return this.rubro?.touched && !this.rubro?.valid;  //metodo de validacion de nombre
      }*/
  
      get nombreValid() {
        return this.nombre?.touched && !this.nombre?.valid;  
      }
    
      get porcentajeValid() {
        return this.porcentaje?.touched && !this.porcentaje?.valid;  
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
  
  
