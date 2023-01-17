export class Singleton {

    // instancia
    private static instance: Singleton;


    //constructor vacio
    private constructor(){}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // se crea la instancia
        }

        return Singleton.instance;
    }

    
    public mostrarPorConsola() {
        console.log("Metodo de singleton")
    }

    // codigo cliente


}