import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
//redes es entidad/tabla aparte pero insertada tmb en la seccion header
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';


@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})

export class HeadernameComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];

  red: Red[] = [];
  redesTodas: any = [];

  //para ver botones edit when logueado  19-4-23
  personaLog: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);
  modoEdit: any;


  constructor(private persoServ: PersonaService, private redServ: RedService) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarRed();

    //para ver botones edit when logueado  19-4-23
    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
  }
  cargarRed(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });
  }

}





//json angular hasta 9-4-23
/*
import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})
export class HeadernameComponent implements OnInit {

  //headerTodos : any =[];
  personaItems : any =[];
  redesTodas : any;

  //para traer un solo dato
  // nombreCompleto : string = '';
  // subtitulo : string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos:DatosService){}


  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{  
      this.personaItems = data.persona,   
      this.redesTodas = data.redes
    });   
    }
}

*/ 