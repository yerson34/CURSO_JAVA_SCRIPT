//Ejercicio 1
let numero1= prompt("Ingresa el primer número:");
let numero2= prompt("Ingresa el segundo número:");
if (numero1*numero2>100) console.log(`El producto de ${numero1*numero2} es mayor a 100`) 

//Ejercicio 2
let contraseña = prompt("Ingresa la contraseña:");
if (contraseña === "12345678") {
    console.log("la contraseña que ingresaste es correcta")
};

//Ejercicio 3
let numero = Number (prompt("Ingresa un número: "));
if (numero <= 1 || numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  console.log(`${n} no es un número primo.`);
} else {
  console.log(`${n} es un número primo.`);
}
