export class Persona {

    id?: number;
    nombre: string;
    apellido: string;
    ocupacion: string;

    sobremi: string;
    experienciasTexto: string;
    cv: string;
    email: string;

    bannerEntrada: string;
    bannerAvatar: string;
    bannerEducacion: string;
    bannerSalida: string;

    subtitulo1: string;
    subtitulo2: string;

    servicios1: string;
    servicios2: string;
    salida1: string;
    salida2: string;
    copyrights: string;
    logoBrand: string;

    constructor(

        nombre: string,
        apellido: string,
        ocupacion: string,

        sobremi: string,
        experienciasTexto: string,
        cv: string,
        email: string,

        bannerEntrada: string,
        bannerAvatar: string,
        bannerEducacion: string,
        bannerSalida: string,

        subtitulo1: string,
        subtitulo2: string,

        servicios1: string,
        servicios2: string,
        salida1: string,
        salida2: string,
        copyrights: string,
        logoBrand: string,

    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.sobremi = sobremi;
        this.experienciasTexto = experienciasTexto;
        this.cv = cv;
        this.email = email;
        this.bannerEntrada = bannerEntrada;
        this.bannerAvatar = bannerAvatar;
        this.bannerEducacion = bannerEducacion;
        this.bannerSalida = bannerSalida;
        this.subtitulo1 = subtitulo1;
        this.subtitulo2 = subtitulo2;
        this.servicios1 = servicios1;
        this.servicios2 = servicios2;
        this.salida1 = salida1;
        this.salida2 = salida2;
        this.copyrights = copyrights;
        this.logoBrand = logoBrand;
    }

}
