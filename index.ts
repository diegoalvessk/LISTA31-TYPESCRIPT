let nome : string
nome = prompt("Informe o nome")
vogais(nome)
function vogais(nome : string) : void{

    let numeroVogal = 0
    let vogais = ["a", "e", "i", "o", "u"]


    for (let index = 0; index < nome.length; index++) {
        if (vogais.indexOf(nome[index]) != -1) {
            numeroVogal++;
        }
    }
    console.log(numeroVogal)

}

let index: number
let nome2 : string
nome = prompt("Infiorme o nome.")
RetornarCaractere(nome2)
function RetornarCaractere(nome2 : string) {
    let metade: number = (nome2.length / 2)
    
    if (nome2.length % 2 != 0) {
        console.log(nome2.substring(metade, 0))


    } else if (nome2.length % 2 == 0) {
       console.log(nome2.substring(metade, 1))
    }
}


function Ordenar(numeros: number) : void{
    let numero2 = String(numeros)
    let numero1 = numero2.split("")

    numero1.sort()
    numero1.reverse()

    let concatenar: string = ("")
    for (let index = 0; index < numero1.length; index++) {
        concatenar = concatenar + numero1[index]

    }
    let numerosNumber = parseInt(concatenar) 
    console.log(numerosNumber)
}