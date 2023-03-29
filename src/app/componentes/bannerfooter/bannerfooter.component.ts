import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-bannerfooter',
  templateUrl: './bannerfooter.component.html',
  styleUrls: ['./bannerfooter.component.css']
})
export class BannerfooterComponent implements OnInit {

  //bannerSalida: string = 'url()';   nope
  bannerSalida: string = '';

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      //this.bannerSalida = data.bannerSalida ,

      //no anda 3, compila pero no muestra  sin el this.bannersalida=    //con el this  tampoco
      //this.bannerSalida = `url(${this.bannerSalida}data.bannerSalida)`

      // asi tampoco 8
      this.bannerSalida = `url(${data.bannerSalida})`
      //ahora siiii, poniendo esto en html   <div class="bannerFOOTER" [style.background-image]=" bannerSalida ">   
      //y nada en el css, solo el resto de estilos, opacidad, fixed etc
    });
  }
}



//58  LINKS UN POCO DE CADA LADO
//https://stackoverflow.com/questions/61010091/path-to-background-image-in-css-with-specific-base-href-in-angular-9

//https://stackoverflow.com/questions/34875426/how-to-add-background-image-using-ngstyle-angular2 no sale,,,,,,ver ngstyle
//ngstyle  https://stackoverflow.com/questions/34875426/how-to-add-background-image-using-ngstyle-angular2

//Style Binding in RC.1 does not work for some CSS selectors (background-image, transform) #8491
//https://github.com/angular/angular/issues/8491  leer

//https://stackoverflow.com/questions/37076867/in-rc-1-some-styles-cant-be-added-using-binding-syntax


//https://angular.io/api/platform-browser/DomSanitizer


