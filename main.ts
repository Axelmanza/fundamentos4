import { Punto } from './Punto'

let p1 = new Punto(1,2)
console.log(p1.toString())

console.log(p1.distanciaAlOrigen())

let p2 = new Punto(2,2)

console.log(p1.calcularDistancia(p2))