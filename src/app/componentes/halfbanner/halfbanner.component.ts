import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-halfbanner',
  templateUrl: './halfbanner.component.html',
  styleUrls: ['./halfbanner.component.css']
})
export class HalfbannerComponent implements OnInit {              

  //banner background fixed
  bannerEntrada: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
        this.bannerEntrada = `url(${data.bannerEntrada})`   //background imagen
    });

  }
}
