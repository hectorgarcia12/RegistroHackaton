export interface Participante {

    id?: number;
    curp?: string;
    nombre?: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    indentificacionoficial?: string;
    foto_identificacion?: string;
    foto_personal?: string;
    sexo?: string;
    fecha_nacimiento?: Date;
    edad?: number;
    correo?: string;
    contrasena?: string;
}
