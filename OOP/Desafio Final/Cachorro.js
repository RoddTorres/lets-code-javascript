import { Animal } from "./Animal.js";

class Cachorro extends Animal {
    constructor (locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, altura = 0) {
        super(locomocao, domesticado, raca, idade, peso);
        this.#altura = altura;
    }
    
    #altura

    cacar() {
        return "Não caço, apenas vou roer meu osso";
    }

    comer() {
        return "Fome do caramba!";
    }

    dormir() {
        return "Vou dormir aqui mesmo";
    }

    latir() {
        return "Au au, gato maldito. AU au!!";
    }

}

export { Cachorro };