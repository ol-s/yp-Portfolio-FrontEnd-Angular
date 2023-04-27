import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoWeb } from 'src/app/model/proyecto-web';
import { ProyectoWebService } from 'src/app/servicios/proyecto-web.service';

@Component({
  selector: 'app-modal-proyectosweb-edit',
  templateUrl: './modal-proyectosweb-edit.component.html',
  styleUrls: ['./modal-proyectosweb-edit.component.css']
})
export class ModalProyectoswebEditComponent {

  pwForm: FormGroup;
  proyectoWeb: ProyectoWeb[] = [];
  proyectosW: any;
  id?: number;

  constructor(
    private proywServ: ProyectoWebService,
    private formBuilder: FormBuilder ) {

    this.pwForm = this.formBuilder.group({
        id: [''],
        imgPageProyecto : ['', [Validators.required]],
        imgPageAlt : [''],
        hrefTargetBlank : [''],
        hrefRepo : ['', [Validators.required]],
        hrefLive : ['', [Validators.required]],
        tituloProyecto : ['', [Validators.required]],
        descripcion : ['', [Validators.required]],
        fecha : ['', [Validators.required]],
    })
  }

  //metodos p formularios reactivos
  get Img() { return this.pwForm.get("imgPageProyecto");}
  get Repo() { return this.pwForm.get("hrefRepo");}
  get Live() { return this.pwForm.get("hrefLive");}
  get Titulo() { return this.pwForm.get("tituloProyecto");}
  get Descripcion() { return this.pwForm.get("descripcion");}
  get Fecha() { return this.pwForm.get("fecha");}


  ngOnInit(): void {
    this.listaProyWeb();
  }

  listaProyWeb(): void {
    this.proywServ.listaProyectosW().subscribe({
      next: (data) => {
        this.proyectoWeb = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findProyWeb(id: number) {
    this.proywServ.findProyectoW(id).subscribe({
      next: (data) => {
        this.pwForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Item cargado correctamente");
    console.log('proyecto id = ' + id);
  }

  saveProyWeb() {
    let proyectosW = this.pwForm.value;
    if (proyectosW.id == '') {
      this.proywServ.saveProyectoW(proyectosW).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Proyecto creado ✔️");
    } else {
      this.proywServ.updateProyectoW(proyectosW.id, proyectosW).subscribe({   
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

  deleteProyWeb(id: number) {
    if (confirm("¿Querés eliminar este proyecto? ❗❗")) {
      this.proywServ.deleteProyectoW(id).subscribe(data => { });
      window.location.reload();
      alert("Proyecto eliminado ✔️");
    }
  }

  //para limpiar el form
  limpiar(): void {
    this.pwForm.reset();
  }

}
