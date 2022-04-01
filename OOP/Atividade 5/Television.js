console.log("=== Atividade 5 - OOP ===");

/*
Construa uma classe para gerar um objeto TV com as propriedades canal, volume e 
ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
Uma implementação publica e outra privada.
*/

//IMPLEMENTAÇÃO PÚBLICA

class Television {
    constructor(ligada=false, canal=1, brilho=50, contraste=50) {
        this.ligada = ligada;
        this.canal = canal;
        this.brilho = brilho;
        this.contraste = contraste;
        this.volume = {
            min: 0,
            max: 10,
            atual: 5
        }
    }


    ligaDesliga() {
        return this.ligada = !this.ligada;
    }

    mudarCanalMais() {
        if (this.ligada) {
            if (this.canal > 10) {
                this.canal = 1;
            } else {
                return ++this.canal;
            }
        } else {
            console.log("Liga a TV, cacete!!");
        }
        
    }

    mudarCanalMenos() {
        if (this.ligada) {
            if (this.canal < 1) {
                this.canal = 10;
            } else {
                return --this.canal;
            }    
        } else {
            console.log("Liga a TV, cacete!!");
        }
    }

    aumentaVolume() {
        if (this.ligada) {
            if (this.volume.atual < this.volume.max) {
                ++this.volume.atual;
            } else {
                return this.volume.atual;
            }
        } else {
            console.log("Liga a TV, cacete!!");
        }
    }

    diminuiVolume() {
        if (this.ligada) {
            if (this.volume.atual > this.volume.min) {
                --this.volume.atual;    
            } else {
                return this.volume.atual;
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

const tv = new Television();