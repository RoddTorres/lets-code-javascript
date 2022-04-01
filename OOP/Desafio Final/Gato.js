import { Animal } from "./Animal.js";

class Gato extends Animal {
    constructor (locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, alturaSalto = 0) {
        super(locomocao, domesticado, raca, idade, peso);
        this.#alturaSalto = alturaSalto;
    }
    
    #alturaSalto

    cacar() {
        return "Vou caçar uns ratos.";
    }

    comer() {
        return "Fome do caramba!";
    }

    dormir() {
        return "Vou dormir aqui mesmo";
    }

    miar() {
        return "MEOOOOW, sai daqui cachorro!!";
    }

}

export { Gato };