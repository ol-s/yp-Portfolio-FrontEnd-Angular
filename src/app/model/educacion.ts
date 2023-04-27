export class Educacion {

    id?: number;                
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
