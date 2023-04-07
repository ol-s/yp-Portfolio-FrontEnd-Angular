//////////////////////model o entidades son lasque traemos del back en java, igualitas y sus atributos//////////////////////////////////

export class Educacion {

    id?: number;                //signo ! o ? si da error //si tengo fechas tmb pongo string, el back lo convierte a date
    logoInstitucion: string;
    logoAlt: string;
    anioeInstitucion: string;
    titulo: string;
    descripcion: string;


    constructor(
        logoInstitucion: string,
        logoAlt: string,
        anioeInstitucion: string,
        titulo: string,
        descripcion: string) {

        this.logoInstitucion = logoInstitucion;  //el primero es el de arriba, el segundo el del constructor
        this.logoAlt = logoAlt;
        this.anioeInstitucion = anioeInstitucion;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}
