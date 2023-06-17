const modulo1 = require('./moduloexercicio1')
const modulo2 = require('./moduloexercicio2')
const modulo3 = require('./moduloexercicio3')
const modulo4 = require('./moduloexercicio4')

const matriz = [
 [1,2,3,4,5],
 [6,7,8,9,10],
 [11,12,13,14,15]
]

const soma = modulo1.adicao(matriz)
console.log(soma)
const somaexp  = modulo2.adicaoexp(matriz)
console.log(somaexp)
const medialc = modulo3.media(matriz)
console.log(medialc)
const multipli = modulo4.multipicar(matriz)
console.log(multipli)
