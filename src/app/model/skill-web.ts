export class SkillWeb {
    
    id?: number;
    nombre : string;
    porcentaje : string;

    constructor(
        nombre : string,
        porcentaje : string, 
    ) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
