<div align="left">
 
 <span><h1><img src="https://github.com/ol-s/yp-Portfolio-FrontEnd-Angular/blob/main/src/assets/img/faviconOscuro.svg" width="50px" style="margin-bottom: -0.1em;"> Portfolio Web - FrontEnd</h1></span>
 
</div>

🔗 [Live FrontEnd](https://sf-portfoliofrontend.web.app/ "Live FrontEnd")  🔗 [Live BackEnd](https://backols.onrender.com/ "Live BackEnd")


<br>

**FrontEnd** del proyecto integrador "Portfolio Web Full Stack" parte del Plan Argentina Programa, en su segunda etapa YoProgramo. 

El diseño FrontEnd se desarrolla a modo **"one page"** adaptable a todas las pantallas (responsive), presentando toda la información en una sola página subdividida en secciones y simplificando la navegación. 

La aplicación es de **arquitectura distribuida**. El [FrontEnd](https://github.com/ol-s/yp-Portfolio-FrontEnd-Angular/ "FrontEnd") muestra los datos personales, estudios cursados, experiencia laboral, skills, proyectos realizados y redes de contacto de la persona; la [Base de Datos](https://github.com/ol-s/yp-Portfolio-FrontEnd-Angular/tree/main/src/assets/der/ "Base de Datos") almacena los datos antes mencionados; y el [BackEnd](https://github.com/ol-s/backend/ "BackEnd") cuenta con las APIs necesarias para  para conectar el FrontEnd de Angular con la Base de Datos. 

En la aplicación se implementa un LOG IN (simple) con email y password con el objetivo de activar el modo edición que permitirá realizar el CRUD (Create, Read, Update and Delete) de la información. Esto se realiza en la misma página a través de formularios reactivos contenidos dentro de modales que son activados con botones, éstos últimos sólo visibles al loguearse.

<br>


## Tecnologías implementadas en el FrontEnd


![HTML5](https://img.shields.io/badge/html5-393434.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-393434.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-393434.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Angular](https://img.shields.io/badge/angular-393434.svg?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/typescript-393434.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-white.svg?style=for-the-badge&logo=firebase&logoColor=black) ☁️


<br>

<br>


## → Secciones y funcionamiento de los modales para el CRUD


## → Edit en dos pasos

El botón edit del componente/sección llama al modal que presenta la lista de items cargados. El modal(1) cuenta con un botón add (+) y cada item tiene sus botones edit/delete. Edit y add llaman a un segundo modal(2) que funciona para ambos. Todo el modal (1 y 2, modal items + modal add/edit) se desarrolla en un componente aparte. Los métodos están dentro del .ts del modal.

<br>

 Componentes (2):
   
`seccion` + `modal items + modal add/edit` 

Botones add y edit/delete por item en primer modal items

<br>

* header  +  modal-header (para editar persona y redes)
* educacion  +  modal-educacion
* skills web/arq/idiomas/soft  +  modal-skill web/arq/idioma/soft
* proyectos arq/web  +  modal-proyectosarq/web
* sobremi/experiencia + modal-experiencia (botón extra en la sección)

#



## → Edit en un paso

El botón edit del componente/sección llama al modal que ya trae todos los datos del form al primer click. Para edición de textos largos y banners, elementos que no se pueden eliminar ya que hacen al formato/diseño de la página. El modal se encuentra en el mismo componente que la sección. Los métodos están dentro del .ts del componente sección.

<br>

Componente (1): 

`seccion + modal edit`

Botón edit item. Sin botones add/delete

<br>

* banners
* sobremi/experiencia textos
* footer/contactame

#