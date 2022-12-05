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
