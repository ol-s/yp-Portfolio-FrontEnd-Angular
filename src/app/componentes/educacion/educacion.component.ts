///////////////////////////////////////////////////integrado al back, desde 5.4.23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////EDITADO EDUCACION DESDE PHPMYADMIN!!////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';                          //*** 
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {


  //isLogged:boolean=false;  //h
  //estudiosTodos: Educacion[]=[]; //se llama al modelo (poner el nombre que lleva en model, Educacion ***) que es un array
  //tengo que dejar estudiostodos cos asi esta en los pipes en el html


  bannerEducacion: string = '';  //como voy a traer los banners?? :/


  estudiosTodos: any = [];
  estudios: Educacion[] = [];
  //titulo: string = "Educacion";  //k

  //education: Education[]=[];


  //educacion: any;

  //estudio: any;

  id?: number;
  //id: string = '';
  /*
    logoInstitucion: string = '';
    logoAlt: string = '';
    anioeInstitucion: string = '';
    titulo: string = '';
    descripcion: string = '';
  */


  //serviEduc es mi alias
  constructor(private educServ: EducacionService) { }


  ngOnInit(): void {  //no va nada aca adentro?, AH, DESPUES DEL METODO ABAJO CARGAMOS ACA ARRIBA //'ngonnit' cos se carga al inicio, no hagas nada, solamente mostrame esto

    this.cargarEstudios(); //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA

    // tampoco anda esto    this.deleteEstudio(this.educacion.id);

  }


  //delante puede ir public o private, si no tiene nada es public
  //cargarestudios en mi metodo, de tipovoid porque no retorna nada,,,
  //this. es para utilizar una variable que esta fuera del metodo, si le pasara id entre los parenteiss, abajo no pondria 'this.' ,,,express 18, min 38'

  //solo este metodo hacemos?? y el new/find/update/delete?  h nor k  lo tienen...  k no tiene delete tampoco
  cargarEstudios(): void {
    this.educServ.listaEstudios().subscribe(data => { this.estudiosTodos = data });
  }
  //listaEstudios()  es lo mismo que escribi en el educacion.service.ts,,,,si tuviera algo entre parentsis aca lo pongo 
  //'data' es alias
  //estudiosTodos es la variable de mas arriba  estudiosTodos: Educacion[]=[]





  /*       //tooooooooooooodo da error
  findEstudio(id: number){
    this.educServ.findEstudio(id).subscribe(data => {this.estudiosTodos=data});  
  }
*/



  //en express h tenia este tmb, no en ghb, me da error aca
  // idEdit(id: number) {
  //   this.isTrue = true;
  //   this.isEditar = id;
  //   }







  /*    queria ver si tenia que encntrar by id first, pero da error esto
    findEstudio(id: number){
      this.educServ.findEstudio(id).subscribe({
        next: (data) => {
          this.educServ.findEstudio(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("Estudios cargados");
    }
  */















  //no anda ni este ni el de abajo, es estoooooooo nomas dice en express pero no me andaaaaaaaaaaaa
  /*
 deleteEstudio(id: number){  //ESTO NO USE, VER SI QUEDA DESPUES
    if(id != undefined){
      this.educServ.deleteEstudio(id).subscribe(data =>{
          alert("Estudio eliminado")
          this.cargarEstudios();
        }, err =>{
          alert("No se pudo eliminar el estudio")      //ni esta alerta me salta
        })
    }}
    */

  /*deleteEstudio(id: number){  //ESTO NO USE, VER SI QUEDA DESPUES
    if(id != undefined){
      this.educServ.deleteEstudio(id).subscribe(data =>{
        
        this.cargarEstudios();
      
      }, err =>{
        alert("Estudio eliminado correctamente!, click Aceptar para recargar la pagina.") 
        //bue,me aparece solo este mensaje de error, so use este alerta :/ borra bien tho
        window.location.reload();
      })
    }}
    */

  /*
  ESTE ELIMINA PERO NO DA MENSAJE DE ALERTA NI NADA
  deleteEstudio(id: number) {
  
    this.educServ.deleteEstudio(id).subscribe(data => {
      alert("Estudio eliminado")
      window.location.reload();  //se recarga la pagina
    });
  }

*/


  /*
      delete(id: any) {
        this.educServ.delete(id)
          .subscribe(
            data => {
              this.cargarEstudios();
            },
            error => console.log(error));
      }
      */











  //   con esto tampoco
  /*
  onDelete(event: Event) {
    event.preventDefault;
 
      this.deleteEstudio(this.educacion.id);  //no me tma el id zzzzzzzzz      
 
      alert("Estudio cargado correctamente!, click Aceptar para recargar la pagina.");  
      window.location.reload();     
    
  }  
*/








  // ESTE TUVE QUE PONER EL ALERTA ABAJO!!!
/*
  deleteEstudio(id: number) {  //ESTO NO USE, VER SI QUEDA DESPUES
    if (id != undefined) {
      this.educServ.deleteEstudio(id).subscribe(data => {     //AH LOS OTROS CIERRAN LA LLAVA ACA, EL ALERT VA ABAJO

        this.cargarEstudios();

      }, err => {
        alert("Estudio eliminado correctamente!, click Aceptar para recargar la pagina.")
        //bue,me aparece solo este mensaje de error, so use este alerta :/ borra bien tho
        window.location.reload();
      })
    }
  }
*/
  //k ----ESTE ANDAN BIEN LAS ALERTAS!!!/////////////////////////

  deleteEstudio(id: number) {
    if (confirm("¿Querés eliminar este estudio?")) {
      this.educServ.deleteEstudio(id).subscribe(data => { });
      window.location.reload();
      alert ("Estudio eliminado correctamente, da click en 'Aceptar' para recargar la pagina.");
    }
  }

  

  //ESTE ANDA BIEN, COMO EL DE ARRIBA PERO SIN CONFIRMACION, DEJOEL DE ARRIBA COS MI MODALELIMAR BORRA EL PRIMER ID QUE ENCUENTRA
/*  deleteEstudio(id: number) {
    if (id != undefined) {
      this.educServ.deleteEstudio(id).subscribe(data => { });
      window.location.reload();
      alert("Estudio eliminado correctamente");
    }
  }
*/

}












//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 4.4.23/////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////////////////////////////
/////////////////////////////////////////////////prendo este para editar modales cos SE MUERE LA ASUS CON LOS DOS CORRIENDO A LAVEZ/////////////////////////



/*
 import { Component, OnInit } from '@angular/core';
 import { DatosService } from 'src/app/servicios/datos.service';

 @Component({
   selector: 'app-educacion',
   templateUrl: './educacion.component.html',
   styleUrls: ['./educacion.component.css']
 })

 export class EducacionComponent implements OnInit {       //con oninit me tira error, faltaba import oninit en linea 1               
   //export class EducacionComponent {

   //instanciamos la variable, para traer un array completo [], 'any'
   estudiosTodos: any = [];
   //estudios: Estudio[]=[];    para llamar de a uno?  'se llama al modelo que es un array'

   //para traer un solo dato
   nombreCompleto: string = '';

   //banner background fixed
   bannerEducacion: string = '';

   //datos: tambien es un alias, nombrar como querramos
   constructor(private datos: DatosService) { }

   //this 'datos' es el datos de la linea 21, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
   ngOnInit(): void {
     this.datos.getDatos().subscribe(data => {
       this.estudiosTodos = data.estudios,
         this.nombreCompleto = data.nombreyapellido,   //si quisieramos traer solo el nombre
         this.bannerEducacion = `url(${data.bannerEducacion})`   //background imagen
     });

   }

 }




*/