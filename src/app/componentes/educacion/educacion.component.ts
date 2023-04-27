//integrado al back. 5-4-23
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';                        
import { EducacionService } from 'src/app/servicios/educacion.service';
//para el banner educacion, cargado en entidad persona
import { Persona } from 'src/app/model/persona';                          
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  estudiosTodos: any = [];
  estudios: Educacion[] = [];

  //para el banner
  persona: Persona[] = [];
  personaItems: any = [];

  //borrar? ver
  id?: number;
  logoInstitucion: string = '';
  logoAlt: string = '';
  anioeInstitucion: string = '';
  titulo: string = '';
  descripcion: string = '';

  //login 21-4-23   //para ver botones edit when logueado  19-4-23
  personaLog: Persona= new Persona("", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", );
  modoEdit: any;

  constructor(
    private educServ: EducacionService, 
    private persoServ: PersonaService, 
  ) { }

  ngOnInit() {
    this.cargarEstudios(); 
    this.cargarPersona();

    //para ver botones edit when logueado 21-4-23
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true; 
    }
  }

  cargarEstudios(): void {
    this.educServ.listaEstudios().subscribe(data => { this.estudiosTodos = data });  
  }
  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });  
  }

}






//con json angular hasta 4-4-23
/*
 import { Component, OnInit } from '@angular/core';
 import { DatosService } from 'src/app/servicios/datos.service';

 @Component({
   selector: 'app-educacion',
   templateUrl: './educacion.component.html',
   styleUrls: ['./educacion.component.css']
 })

 export class EducacionComponent implements OnInit {          
   //export class EducacionComponent {

   //instanciamos la variable, para traer un array completo [], 'any'
   estudiosTodos: any = [];
   //estudios: Estudio[]=[];   

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