////////////////////////////////////////INCOMPLETO, NO SE COMO VOY A TRAER AHORA LOS DATOS COS SOBRE MI ESTA DENTRO DE PERSONA
////////////////////////////////////////////////////////////////////////Y EXPERIENCIA ESTA APARTE, DEBERIA HACER UN COMPONENTE...
///////////////////////////////////////////////////////////////Y TAMBIEN DEBERIA TRAER DESDE PERSONA LOS DATOS DELFOOTER/////////

/*
import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';                          //*** 
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class EducacionComponent implements OnInit {          


  estudiosTodos: Educacion[]=[]; //se llama al modelo (poner el nombre que lleva en model, Educacion ***) que es un array
  bannerEducacion: string = '';  //como voy a traer los banners?? :/
  titulo: string = "Educacion";  //k


  seccionsobremi: any;
  cv: string = '';  //para traer un solo dato
  sobremi: string = '';
  experiencias: string = '';

  //banner background fixed
  bannerAvatar: string = '';




  //serviEduc es mi alias
  constructor(private serviEduc: EducacionService) { }



  ngOnInit(): void {  //no va nada aca adentro?, AH, DESPUES DEL METODO ABAJO CARGAMOS ACA ARRIBA //'ngonnit' cos se carga al inicio, no hagas nada, solamente mostrame esto
    this.cargarEstudios();
 

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


*/

















import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  seccionsobremi: any;
  cv: string = '';  //para traer un solo dato
  sobremi: string = '';
  experiencias: string = '';

  //banner background fixed
  bannerAvatar: string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos: DatosService) { }

  //this 'datos' es el datos de la linea 20, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.seccionsobremi = data.any,
        this.sobremi = data.sobremi,
        this.experiencias = data.experiencias,
        this.cv = data.cv,   //si quisieramos traer solo el cv desde el json, quedaron con el mismo nombre aca y el el json
        this.bannerAvatar = `url(${data.bannerAvatar})`   // background imagen
    });
  }
}


// DomSanitizer-VERRRRR SI HAY PROBLEMAS
// https://stackoverflow.com/questions/34875426/how-to-add-background-image-using-ngstyle-angular2

