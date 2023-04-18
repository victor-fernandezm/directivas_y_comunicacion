export class Doctor {
    nombre: string = "";
    apellidos: string = "";
    cedula: string = "";
    foto: string = "";

    constructor() {}
};

export class Patient {
    nombre: string = "";
    apellidos: string = "";
    dni: string = "";
    tlf?: string;
    direccion?: string;
    mail?: string;
    
    constructor() {}
};