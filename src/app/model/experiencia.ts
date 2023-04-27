export class Experiencia {

    id?: number;
    rubro: string;
    logoLugar: string;
    lugar: string;
    puesto: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;

    constructor(
        rubro: string,
        logoLugar: string,
        lugar: string,
        puesto: string,
        descripcion: string,
        fechaInicio: string,
        fechaFin: string,) {

        this.rubro = rubro;
        this.logoLugar = logoLugar;
        this.lugar = lugar;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
