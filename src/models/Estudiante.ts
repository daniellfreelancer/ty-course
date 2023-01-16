import { Curso } from "./curso";

export class Estudiante {

    //propiedades de clase

    nombre : string;
    apellidos?: string
    cursos : Curso[];


    private ID: string = "0120012";

    //constructor
    /**
     * 
     * @param nombre 
     */
    constructor( nombre: string, cursos: Curso[], apellidos?: string,){
        this.nombre = nombre;
        //this.apellidos = apellidos || undefined;
        if(apellidos){
            this.apellidos = apellidos
        }
        this.cursos = cursos

    }

    get horasEstudaidas (): number{

        let horasStudies = 0

        this.cursos.forEach((curso: Curso)=>{
            horasStudies += curso.horas
        })
        return horasStudies;
    }

    set id_estudiante (id : string){
        this.ID = id;
    }



}