class Animal {
    constructor(locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0) {
    this.locomocao = locomocao;
    this.domesticado = domesticado;    
    this.raca = raca;
    this.idade = idade;
    this.peso = peso;
    }

    #locomocao
    #domesticado
    #raca
    #idade
    #peso
    
    cacar() {
        return "Apenas se o animal for caçador.";
    }

    comer() {
        return "Fome do caramba!";
    }

    dormir() {
        return "Vou dormir aqui mesmo";
    }
}

export { Animal };