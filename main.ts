import { Punto } from './Punto'

let p1 = new Punto(-1,-2)
// console.log(p1.toString())

// console.log(p1.distanciaAlOrigen())

let p2 = new Punto(2,2)

// console.log(p1.calcularDistancia(p2))
// console.log(p1.calcularCuadrante());

let p3 = new Punto(10, 10);

console.log(p1.masCercano([p2, p3]));
