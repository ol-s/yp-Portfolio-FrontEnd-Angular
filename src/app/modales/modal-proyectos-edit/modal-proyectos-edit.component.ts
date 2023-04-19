import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-edit',
  templateUrl: './modal-proyectos-edit.component.html',
  styleUrls: ['./modal-proyectos-edit.component.css']
})

export class  ModalProyectosEditComponent implements OnInit { 

  pForm: FormGroup;
  proyectoArq: Proyecto[] = []; //CAMBIAR NOMBRE AL MODEL/SERVICE/MODAL? try
  proyectosA: any;
  id?: number;

  constructor(
    private pServ:ProyectoService,
    private formBuilder: FormBuilder ) {

    this.pForm = this.formBuilder.group({    
    id: [''],
    rubro : [''], //no use
    imgPageProyecto: ['', [Validators.required]],
    imgPageAlt : [''], //no use
    hrefTargetBlank : ['', [Validators.required]],
    hrefRepo : [''], //no use
    hrefLive : [''], //no use
    tituloProyecto : ['', [Validators.required]],
    descripcion : [''],
    })
  }

  //metodos p formularios reactivos
  get Img() { return this.pForm.get("imgPageProyecto");}
  get ImgTB() { return this.pForm.get("hrefTargetBlank");}
  get Titulo() { return this.pForm.get("tituloProyecto");}
  get Descripcion() { return this.pForm.get("descripcion");}



  ngOnInit(): void {
    this.listaProyArq();
  }

  listaProyArq(): void {  //nombre aca
    this.pServ.listaProyectos().subscribe({  //nombre en el servicio
      next: (data) => {
        this.proyectoArq = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findProyArq(id: number) {
    this.pServ.findProyecto(id).subscribe({
      next: (data) => {
        this.pForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log("ProyectoArq id = " + id);
  }

  saveProyArq() {
    let proyectosA = this.pForm.value;
    if (proyectosA.id == '') {
      this.pServ.saveProyecto(proyectosA).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Proyecto creado ✔️");
    } else {
      this.pServ.updateProyecto(proyectosA.id, proyectosA).subscribe({   
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Proyecto editado ✔️");
    }
  }

  deleteProyArq(id: number) {
    if (confirm("¿Querés eliminar este proyecto? ❗❗")) {
      this.pServ.deleteProyecto(id).subscribe(data => { });
      window.location.reload();
      alert("Proyecto eliminado ✔️");
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.pForm.reset();
  }

}




/* nunca anduvo, incompleto
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
          //le habia cambiado los nombres aca ((:
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
     
    }*/