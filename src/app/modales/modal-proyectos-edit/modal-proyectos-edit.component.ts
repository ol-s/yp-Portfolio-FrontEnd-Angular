import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-modal-proyectos-edit',
    templateUrl: './modal-proyectos-edit.component.html',
    styleUrls: ['./modal-proyectos-edit.component.css']
  })
  
  export class  ModalProyectosEditComponent implements OnInit {  
     
      form: FormGroup;
    
      constructor(private formBuilder: FormBuilder) {
     
        this.form = this.formBuilder.group({
          
          urlimg: ['', [Validators.required]],
          altImg: ['', [Validators.required]],
          targetblank: ['', [Validators.required]],
          titulop: ['', [Validators.required]],
          descripcionp: ['', [Validators.required]],
         
        })
      }
    
      ngOnInit() { }
    
      // metodos para el formulario

      get urlimg() {
        return this.form.get("urlimg");   
      }
      get urlimgValid() {
        return this.urlimg?.touched && !this.urlimg?.valid;  
      }

      get altImg() {
        return this.form.get("altImg");   
      }
      get altImgValid() {
        return this.altImg?.touched && !this.altImg?.valid;  
      }

      get targetblank() {
        return this.form.get("targetblank");   
      }
      get targetblankValid() {
        return this.targetblank?.touched && !this.targetblank?.valid; 
      }

      get titulop() {
        return this.form.get("titulop");   
      }
      get titulopValid() {
        return this.titulop?.touched && !this.titulop?.valid;  
      }

      get descripcionp() {
        return this.form.get("descripcionp");   
      }
      get descripcionpValid() {
        return this.descripcionp?.touched && !this.descripcionp?.valid;  
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
