var nome;
nome = prompt("Informe o nome");
vogais(nome);
function vogais(nome) {
    var numeroVogal = 0;
    var vogais = ["a", "e", "i", "o", "u"];
    for (var index_1 = 0; index_1 < nome.length; index_1++) {
        if (vogais.indexOf(nome[index_1]) != -1) {
            numeroVogal++;
        }
    }
    console.log(numeroVogal);
}
var index;
var nome2;
nome = prompt("Infiorme o nome.");
RetornarCaractere(nome2);
function RetornarCaractere(nome2) {
    var metade = (nome2.length / 2);
    if (nome2.length % 2 != 0) {
        console.log(nome2.substring(metade, 0));
    }
    else if (nome2.length % 2 == 0) {
        console.log(nome2.substring(metade, 1));
    }
}
function Ordenar(numeros) {
    var numero2 = String(numeros);
    var numero1 = numero2.split("");
    numero1.sort();
    numero1.reverse();
    var concatenar = ("");
    for (var index_2 = 0; index_2 < numero1.length; index_2++) {
        concatenar = concatenar + numero1[index_2];
    }
    var numerosNumber = parseInt(concatenar);
    console.log(numerosNumber);
}
