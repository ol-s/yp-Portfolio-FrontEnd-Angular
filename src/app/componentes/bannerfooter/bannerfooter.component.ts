// integrado al back. 9-4-23

import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                      
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-bannerfooter',
  templateUrl: './bannerfooter.component.html',
  styleUrls: ['./bannerfooter.component.css']
})
export class BannerfooterComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];

  constructor(private persoServ: PersonaService) { }

  ngOnInit(): void {  
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });  
  }

}








//nuevo json para entidad persona en el back. corriendo ok solo c angular hasta 9-4-23
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-bannerfooter',
  templateUrl: './bannerfooter.component.html',
  styleUrls: ['./bannerfooter.component.css']
})
export class BannerfooterComponent implements OnInit {          

  personaItems: any = [];
  bannerSalida: string = '';
 
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
        this.personaItems = data.persona
        this.bannerSalida = `url(${data.persona})`
    });
  }
}
*/
