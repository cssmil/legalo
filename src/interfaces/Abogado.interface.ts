import { IHabilidad } from "./Habilidad.interface";
import { ITrabajo } from "./Trabajo.interface";
import { IUser } from "./User.interface";

export interface IAbogado {
    id?: number;
    user: IUser;
    nombres: string;
    apellidos: string;
    dni: string;
    fecha_nacimiento: string;
    universidad: string;
    grado_academico: string;
    acerca_de: string;
    telefono: string;
    direccion: string;
    especializacion: string;
    industria: string;
    experiencia: string;
    experiencia_anos: string;
    pdf_cv: string;
    habilidades: IHabilidad[];
    trabajos: ITrabajo[];
}

export interface IAbogadoBack {
    id: number;
    user: IUser;
    nombres: string;
    apellidos: string;
    dni: string;
    fecha_nacimiento: string;
    universidad: string;
    grado_academico: string;
    acerca_de: string;
    telefono: string;
    direccion: string;
    especializacion: string;
    industria: string;
    experiencia: string;
    experiencia_anos: string;
    pdf_cv: string;
    imagen: string;
    foto_url: string;
    habilidades: IHabilidad[];
    trabajos: ITrabajo[];
}