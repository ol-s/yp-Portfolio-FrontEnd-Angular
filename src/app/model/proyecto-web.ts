export class ProyectoWeb {

    id?: number;
    imgPageProyecto : string;
    imgPageAlt : string;
    hrefTargetBlank : string;
    hrefRepo : string;
    hrefLive : string;
    tituloProyecto : string;
    descripcion : string;
    fecha : string;

    constructor(
        imgPageProyecto : string,
        imgPageAlt : string,
        hrefTargetBlank : string,
        hrefRepo : string,
        hrefLive : string,
        tituloProyecto : string,
        descripcion : string,
        fecha : string,
    ) {

        this.imgPageProyecto = imgPageProyecto;
        this.imgPageAlt = imgPageAlt;
        this.hrefTargetBlank = hrefTargetBlank;
        this.hrefRepo = hrefRepo;
        this.hrefLive = hrefLive;
        this.tituloProyecto = tituloProyecto;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

}

