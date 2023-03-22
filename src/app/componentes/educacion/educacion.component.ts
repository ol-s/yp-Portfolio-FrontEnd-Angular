import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

//export class EducacionComponent implements OnInit {       //con oninit me tira error               
export class EducacionComponent {

  //instanciamos la variable, para traer un array completo [], 'any'
  estudiosTodos : any =[];
  //estudios: Estudio[]=[];    para llamar de a uno?  'se llama al modelo que es un array'

  //para traer un solo dato
  nombreCompleto : string = '';



  //datos: tambien es un alias, nombrar como querramos
  constructor(private datos:DatosService){}


  //this 'datos' es el datos de la linea 21, el getDatos viene del datos.service.ts,  'data'  es otro alias que ponemos nosotros
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data =>{  
      this.estudiosTodos = data.estudios,
      this.nombreCompleto = data.nombreyapellido   //si quisieramos traer solo el nombre
    });
    
    }



}
