//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';


@Component({
  selector: 'app-modal-skill-arq-edit',
  templateUrl: './modal-skill-arq-edit.component.html',
  styleUrls: ['./modal-skill-arq-edit.component.css']
})

export class ModalSkillArqEditComponent {

  saForm: FormGroup;
  skillArq: SkillArq[] = [];
  arquiSkill: any;
  id?: number;


  nombre: string = '';  //sin esto me da error el ngmodel en el html, dice angular  no hay q usar igual, captura los datos solo con formcontrolname?
  porcentaje: string = '';//probar sacarlo igual,  A VER SI ANDA IGUAL, no hace falta, todos lo ponen, consola da warning...


  constructor(
    private saServ: SkillArqService, 
    private formBuilder: FormBuilder, 
    //private httpClient: HttpClient, 
    //private router: Router
    ) {
    this.saForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],

    })
  }


  //metodos p formularios reactivos
  get Nombre() { return this.saForm.get("nombre"); }
  //get NombreValid() { return this.Nombre?.touched && !this.Nombre?.valid; }

  get Porcentaje() { return this.saForm.get("porcentaje"); }
  //get PorcentajeValid() { return this.Porcentaje?.touched && !this.Porcentaje?.valid; }


  ngOnInit(): void {
    this.listaSkillsArq();
  }

  listaSkillsArq(): void {
    this.saServ.listaSkillsA().subscribe({
      next: (data) => {
        this.skillArq = data;
        //console.log('Items cargados correctamente');
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    })
  }

  findSkillArq(id: number) {
    this.saServ.findSkillA(id).subscribe({
      next: (data) => {
        this.saForm.setValue(data);
      },
      error: (e) => console.error(e),
      //complete: () => console.info('Completado')
    });
    //console.log("Estudios cargados correctamente");
    console.log("Skill id = " + id);
  }


  saveSkillArq() {
    let arquiSkill = this.saForm.value;
    if (arquiSkill.id == '') {
      this.saServ.saveSkillA(arquiSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill creada ✔️");
    } else {
      this.saServ.updateSkillA(arquiSkill.id, arquiSkill).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('Completado')
      });
      window.location.reload();
      alert("Skill editada ✔️");
    }
  }

  deleteSkillArq(id: number) {
    if (confirm("Querés eliminar esta skill? ❗❗")) {
      this.saServ.deleteSkillA(id).subscribe(data => { });
      window.location.reload();
      alert("Skill eliminada ✔️");
    }
  }


  //para limpiar el form
  limpiar(): void {
    this.saForm.reset();
  }

  // back() {
  //   this.router.navigate(['/al home o pagina atras, tengo pagina unica, ver el 404 para cuando']);
  // }



}















/* estaba antes de hacer la preuba en app-modal-skill*edit,,,eso lo pase aca arriba

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillArq } from 'src/app/model/skill-arq';
import { SkillArqService } from 'src/app/servicios/skill-arq.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-skill-arq-edit',
  templateUrl: './modal-skill-arq-edit.component.html',
  styleUrls: ['./modal-skill-arq-edit.component.css']
})

export class ModalSkillArqEditComponent {

  public editform: FormGroup;
  // postRef: any


  //MIO
  SkillArq: SkillArq[] = [];
  skillsTodasArq: any = [];

  nombre: string = '';  //sin esto me da error el ngmodel en el html, dice angular  no hay q usar igual, captura los datos solo con formcontrolname?
  porcentaje: string = '';
  id?: number;



  constructor(
    private formBuilder: FormBuilder,
    private saServ: SkillArqService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.editform = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.max(100)]],
    })
  }

  // metodos para el formulario reactivo
    get Skill() { return this.editform.get("nombre"); }
    get Porc() { return this.editform.get("porcentaje"); }



  //HABRIA QUE PONER SOLO EL METODO COMO DIJO K,PONER EL FINF AFUERA, PERO NO ME ANDABA ASI TAMPOCO  ''/find/UNDEFINED''
  ngOnInit() {
    /*const id = this.activatedRoute.snapshot.params['id'];   //no me toma el id entre parentesis
    this.saServ.findSkillA(id).subscribe(res => {           //res respuesta, data etc
      this.postRef = res
      this.editform = this.formBuilder.group({
        nombre: [this.postRef.nombre],
        porcentaje: [this.postRef.porcentaje],
      })
    })
    console.log(id)
  }




  onEnviar(event: Event) {
    const id = this.activatedRoute.snapshot.params['id'];   //no me toma el id entre parentesis
    //this.saServ.updateSkillA(id)       //no me toma  (this.editform.value, id), solo un argumento, eltiene el metodo update en el servicio cos no lo trae de una bd, y ahi iene 2 argumentos
    this.router.navigate([' '])




    //MIO
    this.onUpdate();  //error consola

    event.preventDefault;
    if (this.editform.valid) {
      this.updateSkillA(id);
      //this.saveEducacion();  
      ///este agregue yo, cos esta enexpress, pero no en todos los otros que venia viendo...
 
      alert(" EDITADO ✔️. Click en 'Aceptar' para recargar la página.");    
      window.location.reload();

    } else {
 
      alert("Falló la carga de datos ❌. Intente nuevamente.");
      
      this.editform.markAllAsTouched();
    }

  }
  

  //mas agregardos, nada anda
  onUpdate(): void {
    //this.saServ.updateSkillA(id, skillArq ).subscribe(data => { });   //(this.postRef.id) me dice error la consola, id solo me da error angular
      window.location.reload();
      alert ("editado ✔️. Click en 'Aceptar' para recargar la página.");
  }



  //para limpiar el form
  limpiar(): void {
    this.editform.reset();
  }


  //me da error el segundo id, probar por id como string
  updateSkillA(id: string) {
    if (confirm("❗❗ ¿Querés editar este item? ")) {       
      //this.saServ.updateSkillA(skillsTodasArq.id, skillArq).subscribe(data => { });  //apago cos cambie a by id y da todo error
      window.location.reload();
      alert ("editado ✔️. Click en 'Aceptar' para recargar la página.");
    }
  }






  
/*  error id
  findSkillArq(): void {
    this.saServ.findSkillA(id).subscribe(data => { this.skillsTodasArq = data });    
  }

//MIO//no encuentra  el id,,soloponiendo toda la ruta en el,  html routerlink, pero igual esta todo en rojo
findSkillArq(id: number){
  this.saServ.findSkillA(this.skillsTodasArq.id).subscribe({  //pongoao asi largo porque me da error  el id ((((:   ta todo roto esto
    next: (data) => {
      //this.form.setValue(data);
    },
    error: (e) => console.error,
    complete: ()=> console.info('complete')
  });
  console.log("skill cargada correctamente");   
}

}











/*  para probar hacerlo mas corto, no se si anda
 onEnviar(event: Event) {
   event.preventDefault;
   if (this.form.valid) {
     alert("Validaciones correctas, ¡Enviar!")
   } else {
     this.form.markAllAsTouched();
   }
 }*/