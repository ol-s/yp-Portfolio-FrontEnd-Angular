//integrado al back. 9-4-23
import { Component, OnInit } from '@angular/core';
//para editar logoBrand
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  persona: Persona[] = [];
  personaItems: any = [];

  //para ver botones loginout when logueado  21-4-23 + modoedit en el html
  personaLog: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",);
  modoEdit: any;


  constructor(private persoServ: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.persoServ.listaPersonas().subscribe(data => { this.personaItems = data });

    //para ver botones loginout when logueado  21-4-23
    if (sessionStorage.getItem('currentUser') == "null") {
      this.modoEdit = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cerrarSesion() {
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("Sesión cerrada ✔️");
    window.location.reload();
    return this.modoEdit;
  }


}




//json angular + persona logo brand editable
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  personaItems: any = [];
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.personaItems = data.persona
    });
  }
}

*/
