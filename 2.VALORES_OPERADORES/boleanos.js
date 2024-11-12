// ejemplos con operadores de comparacion
console.log(5>6) 
//esta operacion me generara un valor de tipo boleano

//mayor igual que
console.log(6>=6)

//no es igual
console.log(5!=4)

//NaN == NaN
console.log(NaN == NaN)

//AVERIGUAR la forma en que se realiza las comparaciones con cadena de texto
//todas las letras mayusculas seran menores a las minusculas
//Z>a  por que javascript compara los codigos unicode de cada caracter
//TAREA
//Compara el primer valor o letra de cada palabra segun su unicode
//A=65 y Z=90 por lo tanto Ardavark es menor que Zoroaster


// !>=?
// 33>=63
console.log("!">="?")
//Ardavark > Zoroaster
console.log("Ardavark"<"Zoroaster") //explica como resuelve esta operacion

//en el caso del operador && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)
console.log(true && true)
//OBSERVACION: Si ambos valores son verdaderos devolvera el segundo valor
console.log("hola"&&"mundo")
//OBSERVACION: En caso exista un valor verdadero y uno falso, devolvera el valor falso.
console.log(0&&"hola")

//OJO:  Los valores 0, NaN, y una cadena vacia " " son considerados false.
//or es todo lo contrario que and , si ambos son verdaderos devuelve el primer valor verdadero
//si ambos son falsos devuelve el segundo valor falso
// si es falso y verdadero devuelve el verdadero

respuesta="te devuelvo los ositos"
console.log(respuesta || "tu busqueda no existe")
console.log(0||"")
//en el caso del operador || produce verdadero si cualquiera de los valores dados es verdadero.
console.log(false || false)
console.log(true||false) 

// en el casodel operador ! invierte el valor dado
console.log(!true)
console.log(!false)

//la operacion relacional solo funciona en objetos y arrays
console.log("hola" in ["hola","mundo"])
//Javascript no busca valores como "hola" sino que busca por el indice del valor
//si en vez de poner "hola" ponemos el indice en el que se encuentra, es decir "0", nos dara el resultado
console.log(0 in ["hola","mundo"])


