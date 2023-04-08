////////////////////////////////////////////JSON angular PERSONA/logoBrand/////////////////////////////////////
///////////////////////////////////////////falta conectar al servicio persona para el back
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

