export class Proyecto {

    id?: number;
    rubro : string;
    imgPageProyecto : string;
    imgPageAlt : string;
    hrefTargetBlank : string;
    hrefRepo : string;
    hrefLive : string;
    tituloProyecto : string;
    descripcion : string;

    constructor(
        rubro : string,
        imgPageProyecto : string,
        imgPageAlt : string,
        hrefTargetBlank : string,
        hrefRepo : string,
        hrefLive : string,
        tituloProyecto : string,
        descripcion : string,
    ) {

        //rubro como que deberia limpiar aca y en el java
        this.rubro = rubro;
        this.imgPageProyecto = imgPageProyecto;
        this.imgPageAlt = imgPageAlt;
        this.hrefTargetBlank = hrefTargetBlank;
        this.hrefRepo = hrefRepo;
        this.hrefLive = hrefLive;
        this.tituloProyecto = tituloProyecto;
        this.descripcion = descripcion;
    }


}
