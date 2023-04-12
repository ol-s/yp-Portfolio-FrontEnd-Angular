import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
//importo redes en el modal para editar el 'red-component' dentro del modal
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//solo por el limpiar() cos no validators here (?),,,lo saque nomas, error en ''form'' 


@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {

  red: Red[] = [];
  redesTodas: any = [];

  constructor(private redServ: RedService) { }

  ngOnInit(): void {
    this.cargarRed(); //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA
  }

  cargarRed(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });

  }


  //para limpiar el form, ,,,lo saque nomas, error en ''form'' 
  /*limpiar(): void {
    this.form.reset();
  }*/

  //delete dentro del html (boton click delete) del modal header
  deleteRed(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar esta red? ")) {
      this.redServ.deleteRed(id).subscribe(data => { });
      window.location.reload();

      alert("Red eliminada ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }

}