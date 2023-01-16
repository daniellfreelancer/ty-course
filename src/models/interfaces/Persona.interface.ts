
export enum Niveles{
    "informativa",
    "urgente",
    "Bloqueante"
}


/**
 * Define el tipo
 * interface para definir la firma y los puntos necesarios a implementar
 */
export interface ITarea{

    titulo: string,
    descripcion?: string,
    completado: boolean,
    urgencia?: Niveles,
    resumen: ()=> string



}