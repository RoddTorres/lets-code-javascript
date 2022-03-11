console.log("Atividade 2 - JS OOP");

const pessoa = {
    altura: 1.76,
    peso: 82,
    cabelo: "preto",
    olhos: "castanhos",
    idade: 44,
    calorias: {
        min: -7000,
        max: 7000,
        atual: 0
    },
    
    comer: function() {
        this.calorias.atual += 1000;
        if (this.calorias.atual == this.calorias.max) {
            this.peso++;
            this.calorias.atual = 0;
            return `Você ganhou 1kg e seu peso agora é ${this.peso}kg. Bora malhar!`;
        } else {
            return this.calorias.atual;
        }
    },

    treinar: function() {
        this.calorias.atual -= 1000;
        if (this.calorias.atual == this.calorias.min) {
            this.peso--;
            this.calorias.atual = 0;
            return `Você perdeu 1kg e seu peso agora é ${this.peso}kg`;
        } else {
            return this.calorias.atual;
        }
    }   
};