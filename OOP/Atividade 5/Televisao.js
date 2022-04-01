class Televisao {
    constructor(ligada=false, canal=1, brilho=50, contraste=50) {
        this.#ligada = ligada;
        this.#canal = canal;
        this.#volume = {
            min: 0,
            max: 10,
            atual: 5
        }
        this.brilho = brilho;
        this.contraste = contraste;
    }

    brilho
    contraste

    static canais = {
        1: "Canal do Boi",
        2: "TV Senado",
        3: "Record",
        4: "TV Aparecida"
    }

    #ligada
    #canal
    #volume  

    ligaDesliga() {
        return this.#ligada = !this.#ligada;
    }

    mudarCanal(numero = this.#canal) {
        if (this.#ligada) {
            this.#canal = numero;
            return console.log(`${Televisao.canais[this.#canal]}`);
        }
    }

    aumentaVolume() {
        if (this.#ligada) {
            if (this.#volume.atual < this.#volume.max) {
                ++this.#volume.atual;
            } else {
                return this.#volume.atual;
            }
        } else {
            console.log("Liga a TV, cacete!!");
        }
    }

    diminuiVolume() {
        if (this.#ligada) {
            if (this.#volume.atual > this.#volume.min) {
                --this.#volume.atual;    
            } else {
                return this.#volume.atual;
            } 
        } else {
            console.log("Liga a TV, cacete!!");
        }   
    }

    aumentaBrilho() {
        if (this.brilho < 100)
            this.brilho += 10;
        else
            return this.brilho;
    }

    diminuiBrilho() {
        if (this.brilho > 0)
            this.brilho -= 10;
        else 
            return this.brilho;
    }

    aumentaContraste() {
        if (this.contraste < 100)
            this.contraste += 10;
        else
            return this.contraste;
    }

    diminuiContraste() {
        if (this.contraste > 0)
            this.contraste -= 10;
        else 
            return this.contraste;
    }
}

const teve = new Televisao();