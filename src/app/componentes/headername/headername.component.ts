import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-headername',
  templateUrl: './headername.component.html',
  styleUrls: ['./headername.component.css']
})
export class HeadernameComponent implements OnInit {

  //headerTodos : any =[];
  headerTodos : any =[];
  redesTodas : any;

  //para traer un solo dato
  // nombreCompleto : string = '';
  // subtitulo : string = '';

  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos:DatosService){}


  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{  
      this.headerTodos = data.header,   
      this.redesTodas = data.redes
    });
    
    }



}
