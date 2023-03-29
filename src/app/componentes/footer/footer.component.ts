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
