///////////////////////////////////////////////////integrado al back, desde 5.4.23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////EDITADO EDUCACION DESDE PHPMYADMIN!!////////////////////////////////////

import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';                          //*** 
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {          

  //isLogged:boolean=false;  //h
  estudiosTodos: Educacion[]=[]; //se llama al modelo (poner el nombre que lleva en model, Educacion ***) que es un array
  bannerEducacion: string = '';  //como voy a traer los banners?? :/
  titulo: string = "Educacion";  //k

  //serviEduc es mi alias
  constructor(private serviEduc: EducacionService) { }

  
  // ngOnInit(): void {
  //   this.datos.getDatos().subscribe(data => {
  //     this.estudiosTodos = data.estudios,
  //       this.nombreCompleto = data.nombreyapellido,   //si quisieramos traer solo el nombre
  //       this.bannerEducacion = `url(${data.bannerEducacion})`   //background imagen
  //   });

  // }


  ngOnInit(): void {  //no va nada aca adentro?, AH, DESPUES DEL METODO ABAJO CARGAMOS ACA ARRIBA //'ngonnit' cos se carga al inicio, no hagas nada, solamente mostrame esto
    
    this.cargarEstudios(); //SOLAMENTE CARGA DATOS, NO EDITA/BORRA/NADA
 

  }   

  
  //delante puede ir public o private, si no tiene nada es public
  //cargarestudios en mi metodo, de tipovoid porque no retorna nada,,,
  //this. es para utilizar una variable que esta fuera del metodo, si le pasara id entre los parenteiss, abajo no pondria 'this.' ,,,express 18, min 38'
  

  //solo este metodo hacemos?? y el new/find/update/delete?  h nor k  lo tienen...  k no tiene delete tampoco
  cargarEstudios():void{
    this.serviEduc.listaEstudios().subscribe(data => {this.estudiosTodos=data});  
  }
  //listaEstudios()  es lo mismo que escribi en el educacion.service.ts,,,,si tuviera algo entre parentsis aca lo pongo 
  //'data' es alias
  //estudiosTodos es la variable de mas arriba  estudiosTodos: Educacion[]=[]





  //en express h tenia este tmb, no en ghb, me da error aca
  // idEdit(id: number) {
  //   this.isTrue = true;
  //   this.isEditar = id;
  //   }

  deleteEstudio(id: number){  //ESTO NO USE, VER SI QUEDA DESPUES
    if(id != undefined){
      this.serviEduc.deleteEstudio(id).subscribe(data =>{
          alert("Estudio eliminado")
          this.cargarEstudios();
        }, err =>{
          alert("No se pudo eliminar el estudio")
        })
    }}
}












//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 4.4.23/////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes//////////////////////////////////////////////////



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