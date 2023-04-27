//integrado al back. 9-4-23
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';                    
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ProyectoWeb } from 'src/app/model/proyecto-web';
import { ProyectoWebService } from 'src/app/servicios/proyecto-web.service';
//para ver botones edit logueado
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];
  proyectosTodos : any = [];

  proyectoweb: ProyectoWeb[] = [];
  proyectosTodosWeb : any = [];

   //para ver botones edit when logueado  19-4-23
   personaLog: Persona= new Persona("", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", );
   modoEdit: any;
   
  constructor(private proyServ: ProyectoService, private proyWebServ: ProyectoWebService) { }

  ngOnInit(): void {  
    this.cargarProyecto();
    this.cargarProyectoWeb();

    //para ver botones edit when logueado  21-4-23
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true; 
    }
  }

  cargarProyecto(): void {
    this.proyServ.listaProyectos().subscribe(data => { this.proyectosTodos = data });
    
  }
  cargarProyectoWeb(): void {
    this.proyWebServ.listaProyectosW().subscribe(data => { this.proyectosTodosWeb = data });
    
  }


}










//con json angular hasta 9-4-23
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosTodos : any = [];
  proyectosTodosWeb : any = [];

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyectosTodos = data.proyectosArq,
      this.proyectosTodosWeb = data.proyectosWeb
    });
  }
}
*/