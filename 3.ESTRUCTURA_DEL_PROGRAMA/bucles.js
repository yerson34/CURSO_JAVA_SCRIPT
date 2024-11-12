//
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)

// BUCLE WHILE
// let contador=1
// while(contador<=12){
// console.log(contador)
// contador=contador+1
// }
//EJERCICIO
//Crear un programa que me muestre los numeros pares que existen entree 1 y 20
// let numero=2
// while(numero<=20){
//     console.log(numero)
//     numero=numero+2
// }
// OTRA FORMA
// while(numero<=20){
//     if (numero % 2 == 0){
//      console.log(numero)   
//     }
//     numero+=1 //Forma abreviada
// }

//BUCLE FOR
// for(let i=2; i<=20; i++){
//     if (i %2==0) console.log(i)
//   }

//EJERCICIO
// Crear un programa que pida  un numero y muestre por consola todos los numeros menores al numero ingresado por la persona
// let numero=Number(prompt("ingresa un numero: "))
// let contador=1
// while (contador<=numero){
//     console.log(contador)
//     contador+=1
// }

// EJERCICIO 
// crear un programa que me muestre los numeros menores a 20
// en caso encuentre un 7 debera terminar el programa y no mostrar el resto de numeros
for (let i=1; i<=20; i++){
    console.log(i)
    if (i===7){
    break; // si deseamos podemos hacerlo sin cuerpo en una sola linea, sin llaves
    }
}