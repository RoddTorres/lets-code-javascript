import { Animal } from "./Animal.js";

class Papagaio extends Animal {
    constructor (locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, distanciaDeVoo = 0) {
        super(locomocao, domesticado, raca, idade, peso);
        this.#distanciaDeVoo = distanciaDeVoo;
    }
    
    #distanciaDeVoo

    cacar() {
        return "Como eu vou caçar se eu moro em uma gaiola?.";
    }

    comer() {
        return "Fome do caramba!";
    }

    dormir() {
        return "Vou dormir aqui mesmo";
    }

    voar() {
        return "Voar, voar. Subir, subir. Ir por onde for!"
    }

}

export { Papagaio };