console.log("Atividade 1 OOP");

/*
Objetos = Pessoa, Humano.
Atributos = sexo, cor do cabelo, altura, peso, cor dos olhos, naturalidade, nacionalidade.
Métodos = andar, correr, falar, trabalhar, dormir, acordar, dirigir.
*/

//Criando o objeto pessoa
const pessoa = {};

pessoa.sexo = "M";
pessoa.cabelo = "Preto";
pessoa.altura = 1.79;
pessoa.peso = 80;
pessoa.olhos = "castanhos";
pessoa.naturalidade = "Mineiro";
pessoa.nacionalidade = "Brasileiro";

//Métodos para o objeto pessoa
pessoa.andar = function() {
    return "Andei um pouco";
}

pessoa.correr = function() {
    return "Corri muito";
}

pessoa.falar = function() {
    return "Olá, mundo!";
}

pessoa.trabalhar = function() {
    return "Trabalhei. Vou pra casa";
}

pessoa.dormir = function() {
    return "Sono. Vou dormir";
}

pessoa.acordar = function() {
    return "É hora de acordar";
}

pessoa.dirigir = function() {
    return "Vruuum";
}

//Criando o objeto humano com os mesmos métodos e atributos de pessoa
const humano = {};

humano["sexo"] = "F";
humano["cabelo"] = "Loiro";
humano["altura"] = 1.65;
humano["peso"] = 57;
humano["olhos"] = ["olho verde, olho castanho"]; 
console.log("O humano possui heterocromia");
humano["naturalidade"] = "Carioca";
humano["naturalidade"] = "Brasileiro";

//Métodos
humano["andar"] = function() {
    return "Andei um pouco";
}

humano["correr"] = function() {
    return "Corri muito";
}

humano["falar"] = function() {
    return "Olá, mundo!";
}

humano["trabalhar"] = function() {
    return "Trabalhei. Vou pra casa";
}

humano["dormir"] = function() {
    return "Sono. Vou dormir";
}

humano["acordar"] = function() {
    return "É hora de acordar";
}

humano["dirigir"] = function() {
    return "Vruuum";
}

//Console.log
console.log(pessoa);
console.log(humano);

console.log(pessoa, humano);

console.log(pessoa.peso, pessoa.altura);

console.log(humano["altura"], humano["sexo"]);

console.log(pessoa.dormir(), pessoa.acordar());

console.log(humano["trabalhar"](), humano["dirigir"]());

console.log(humano["olhos"]);