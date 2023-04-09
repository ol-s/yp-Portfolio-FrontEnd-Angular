///////////////////////////////////////////////////integrado al back, desde 9-4-23///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';                      
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona: Persona[] = [];
  personaItems: any = [];
  //no hace falta    bannerAvatar: string = '';

  constructor(private persoServ: PersonaService) { }

  ngOnInit(): void {  
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });
    
  }




  //delete///////////////////IGUAL ESTE NO ME SIRVE ACA PORQUE NOQUIERO ELIMINAR NADA DE PERSONA, SOLO EDITAR!!///////////////////
  deletePersona(id: number): void {
    if (confirm("❗❗ ¿Querés eliminar este item? ")) { 

      this.persoServ.deletePersona(id).subscribe(data => { });
      window.location.reload();
      
      alert ("Item eliminado ✔. Click en 'Aceptar' para recargar la página.");
    }
  }

}











////////////////////////////////////CON JSON NUEVO ENTIDAD PERSONA//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////CORRIENDO OK CON JSON ANGULAR HASTA 9-4-23///////////////////////////////////
////////////////////si comento lo de arriba y descomento esto se ve como antes SIN CONECTAR CON NETB, TOMCAT ETC//////////////////////////
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  personaItems: any = [];

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.personaItems = data.persona
    });
  }
}
*/














////////////////////////////////VIEJO JSON, tambien andaba pero suelto, no dentro de persona//////////////////////////////////////////////

/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  saludojson: string = '';
  servicios1: string = '';
  servicios2: string = '';
  descripcion: string = '';
  salida: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.servicios1 = data.servicios1,
        this.servicios2 = data.servicios2,
        this.descripcion = data.descripcion,
        this.salida = data.salida
    });

  }



}
*/