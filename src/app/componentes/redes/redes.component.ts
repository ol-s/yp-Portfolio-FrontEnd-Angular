//integrado al back. 9-4-23
import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})

export class RedesComponent implements OnInit {

  red: Red[] = [];
  redesTodas: any = [];

  constructor(private redServ: RedService) { }

  ngOnInit(): void {
    this.cargarRed();
  }

  cargarRed(): void {
    this.redServ.listaRedes().subscribe(data => { this.redesTodas = data });
  }

}





//json angular hasta 9-4-23
/*
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redesTodas: any;
  constructor(private datos: DatosService) { }
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redesTodas = data.redes
    });
  }
}
*/