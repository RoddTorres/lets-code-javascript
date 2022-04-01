import { Animal } from "./Animal.js";
import { Papagaio } from "./Papagaio.js";
import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";

//(locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, distanciaDeVoo = 0)
const loro = new Papagaio("Voar", true, "Papagaio-verdadeiro", 2, 450, 1000);
console.log(loro);
console.log(loro.cacar());
console.log(loro.comer());
console.log(loro.dormir());
console.log(loro.voar());

//(locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, altura = 0)
const tobi = new Cachorro("Correr", true, "Pinscher", 12, 3.9, 27);
console.log(tobi);
console.log(tobi.cacar());
console.log(tobi.comer());
console.log(tobi.dormir());
console.log(tobi.latir());

//(locomocao = null, domesticado = true, raca = null, idade = 0, peso = 0, alturaSalto = 0)
const sylvester = new Gato("Saltar", true, "Siamês", 8, 8, 1.5);
console.log(sylvester);
console.log(sylvester.cacar());
console.log(sylvester.comer());
console.log(sylvester.dormir());
console.log(sylvester.miar());
