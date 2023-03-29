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
        this.bannerAvatar = `url(${data.bannerAvatar})`   //background imagen
    });
  }
}
