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
  proyectoArq: Proyecto[] = [];
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