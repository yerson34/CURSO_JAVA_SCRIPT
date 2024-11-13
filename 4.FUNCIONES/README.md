# INDICE
- [INDICE](#indice)
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
  - [La pila de llamadas](#la-pila-de-llamadas)
  - [CLOSURE o Funciones de cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [Closure de tipo clase](#closure-de-tipo-clase)
    - [Prototype (Tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)
# FUNCIONES
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) nuestro programa y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## Estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos:
1. hacer uso del keyword `function`.
2. darle normbre a la funcion
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros, lleva parentesis igual
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es", a)
}
//funcion con varios parametros
function funcionVariosParametros(a,b,c){
    console.log(a + b + c)
}
```
**¿como ejecutamos una funcion**
Para ejecutar una funcion debemos ahcer el llaamdo de la misma, haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//crear funcion
function saludo(){
    console.log("hola")
}
//ejecutar funcion
saludo()
// o
dunction salu2(texto){
    console.log("hola: ", texto)
}
//ejecutar
salu2("jory")
```
> [!NOTE]
> ** Reglas para poner el nombre a una funcion** -
Los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){
}
function enviarCorreo(){
}
```
## Tipos de Argumentos y Parametros
Es la manera como se remplaza los argumentos con los parametros
### Argumentos y parametros posicionales
Se les llama posicionales por que los argumentos tomara los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(1,2,3,4)
console.log(respuesta)
//a toma el valor de 1 y asi sucesivamente en el orden que corresponda
```
### Argumentos y parametros Nominales
Se les llama nominales se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
//nominal
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicional
registroAlumno("jory", "rodriguez", "todos los dias")
```
> [!NOTE]
> Posicionales en orden y Nominales especificar el parametro y su valor.
## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea  una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
En este caso el nombre de la funcion sera el nombre que le  pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
Al igual que una funcion clasica podemos tambien pasarle parametros.
### Funcion como declaracion
Se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){

}
console.log(saludo())
```
### Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la funcion de ecma script 5 `es5`.
Se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript
>[!NOTE]
>`verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado extenso o redunante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura:
el parametro seguido del simbolo flecha `=>` y el cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())
// de flecha, no tiene cuerpo a menos que el codigo sea muy extenso
let saludo=()=>("hola mundo")
console.log(saludo())
//mensaje
let mensaje=texto=>console.log("hola, ",texto)
console.log(mensaje("el primo"))
// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registoUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencias
Las diferencias que te enemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
- **binding** es una tecnica que guarda las funciones y variables (enlaces)  sube al principio la declaracion y no el valor a la cabecera o al principio del archivo de javascript.
```js
despedida() //en funciones declarativas
function saludo(){
    return "hola"
}
function despedida(){
    return "adios"
}
```
```js
saludo()
despedida()
```
## La pila de llamadas
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
-**tarea** averiguar sobre LIFO, es un algoritmo de estructura de datos, tecnica para ordenar una pila de lamadas, last in first out
```js
//programa 
function cortarTomate() {
    console.log("cortando tomate")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando verduras")
}
function comer() {
    prepararEnsalada()
     console.log("comiendo la ensalada")   
}
comer()
```
## CLOSURE o Funciones de cierre (Funciones que retorna funciones)
Un CLOSURE es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion, por lo general es una funcion anonima
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando funcion clasica
retornaValor(10)
//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando funcion closure
retornaValor(10)()
```
>[!NOTE]
>Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realice.
### Closure de tipo clase
Son funciones cuyo uso son iguales a las clases, dentro de la ejecucion de una clase tenemos lo que llama como `instancia`. En javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llamada `this`.
```js
function contador(){
    this.contador=1
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//instanciar, almacenar la funion en una variable, hacer uso de new para crear la instancia
let count1=new contador()
console.log(count1.contador)
count1.incre()
console.log(count1.contador)
//ejemplo2
for(let i=0;i<5;i++){
    count1.incre()
}
```
>[!NOTE]
>la funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` cada funcion o variable estara enlazada al objeto que se cree.

>[!WARNING]
>El problema principal de este tipo de funciones es que cuando creamos un nuevo objeto apartir de la funcion tipo clase, reservara espacio en memoria para toda la clase y sus valores creador,eso quiere decir variables y funciones. Cada vez que llamamos a una funcion esta se replica en la memoria.

### Prototype (Tarea- averiguar y sus ejemplos)
En JavaScript, el **prototype** (prototipo) es un mecanismo mediante el cual los objetos pueden compartir propiedades y métodos. Cada objeto en JavaScript tiene un prototipo (que puede ser otro objeto), y este prototipo también tiene un prototipo, formando una cadena de prototipos o "prototype chain". A través de esta cadena, los objetos pueden heredar propiedades y métodos de otros objetos.

### ¿Qué es el Prototype en JavaScript?
- Un **prototipo** es simplemente otro objeto del cual un objeto hereda propiedades y métodos.
- Cuando intentas acceder a una propiedad o método de un objeto, JavaScript busca primero en ese objeto y, si no lo encuentra, va al prototipo de ese objeto, y luego al prototipo del prototipo, y así sucesivamente, hasta que encuentra la propiedad o llega al final de la cadena de prototipos.

### Ejemplo de Prototype con Objetos

Supongamos que creamos un objeto `Persona` usando una función constructora. Podemos agregar métodos al prototipo de `Persona` para que todas las instancias de `Persona` puedan compartir esos métodos:

```javascript
// Función constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregamos un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear instancias de Persona
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

persona1.saludar(); // Output: "Hola, soy Juan y tengo 30 años."
persona2.saludar(); // Output: "Hola, soy Ana y tengo 25 años."
```

En este ejemplo:
- **Persona.prototype.saludar** agrega el método `saludar` al prototipo de `Persona`, de manera que cualquier instancia de `Persona` (como `persona1` y `persona2`) puede acceder a él.
- Este método no se crea cada vez que hacemos una nueva instancia de `Persona`, sino que se comparte entre todas las instancias.

### ¿Por qué usar Prototype?
El uso de prototipos permite que todos los objetos del mismo "tipo" (creados con la misma función constructora) compartan métodos y propiedades. Esto optimiza la memoria, ya que evita que cada objeto tenga su propia copia de un método y, en su lugar, lo heredan desde el prototipo común.

### Ejemplo de Prototype Chain
Si tenemos una cadena de prototipos, JavaScript buscará una propiedad a lo largo de esa cadena hasta encontrarla o llegar al final:

```javascript
function Animal() {
    this.vivo = true;
}

Animal.prototype.respirar = function() {
    console.log("Respirando...");
};

function Perro(nombre) {
    this.nombre = nombre;
}

// Perro hereda de Animal
Perro.prototype = new Animal();

const miPerro = new Perro("Firulais");

console.log(miPerro.vivo);      // Output: true (heredado de Animal)
miPerro.respirar();             // Output: "Respirando..." (heredado de Animal)
console.log(miPerro.nombre);    // Output: "Firulais" (propio de Perro)
```

Aquí:
1. `Perro` hereda de `Animal` al asignar `Perro.prototype = new Animal();`.
2. `miPerro` es una instancia de `Perro`, pero también tiene acceso a las propiedades y métodos de `Animal`.

### Resumen
- **Prototype** permite compartir métodos y propiedades entre objetos en JavaScript, ahorrando memoria y facilitando la reutilización de código.
- **Prototype chain** es la cadena de prototipos que se sigue para buscar propiedades o métodos heredados de otros objetos.
## RECURSION EN FUNCIONES (tarea)
La recursión en funciones ocurre cuando una función se llama a sí misma, ya sea directamente o a través de otra función. Este tipo de funciones es útil para resolver problemas que se pueden dividir en subproblemas más pequeños del mismo tipo, como en cálculos matemáticos o en estructuras de datos como árboles.

### Ejemplo básico de recursión
Supongamos que queremos calcular el factorial de un número \( n \). El factorial de un número (representado como \( n! \)) se define como:

\[
n! = n \times (n - 1) \times (n - 2) \times ... \times 1
\]

Podemos resolverlo de manera recursiva:

```javascript
function factorial(n) {
    if (n === 1) {         // Caso base: si n es 1, devolvemos 1
        return 1;
    }
    return n * factorial(n - 1); // Llamada recursiva con n - 1
}

console.log(factorial(5)); // Output: 120
```

Aquí:
1. **Caso base**: Es el punto donde la recursión se detiene. Para el factorial, cuando `n` es 1, devolvemos 1.
2. **Llamada recursiva**: Si `n` no es 1, la función se llama a sí misma con un valor menor (`n - 1`), multiplicando el resultado por `n`.

### Cómo funciona la recursión
En cada llamada recursiva, el valor de `n` disminuye hasta que llega a 1. La función entonces "desenrolla" todas las llamadas pendientes, multiplicando cada valor hasta completar el cálculo.

Para `factorial(5)`:
- `factorial(5)` llama a `factorial(4)`
- `factorial(4)` llama a `factorial(3)`
- `factorial(3)` llama a `factorial(2)`
- `factorial(2)` llama a `factorial(1)`

Cuando llega a `factorial(1)`, devuelve 1, y la función regresa multiplicando hacia atrás:
- `factorial(2) = 2 * 1`
- `factorial(3) = 3 * 2`
- `factorial(4) = 4 * 6`
- `factorial(5) = 5 * 24 = 120`

La recursión es poderosa, pero se debe usar con cuidado para evitar problemas como el "stack overflow", que ocurre si la función se llama demasiadas veces sin un caso base claro.
## FUNCIONES CALLBACKS(tareas)
Una función *callback* es una función que se pasa como argumento a otra función y se ejecuta después de que esa función termina de hacer algo.

### Ejemplo simple:

```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

function procesarEntradaUsuario(callback) {
    const nombre = "Juan";  // Simulamos una entrada de usuario
    callback(nombre);        // Llamamos a la función callback con el nombre
}

procesarEntradaUsuario(saludar);
```

Aquí:
1. `saludar` es la función *callback* que muestra el mensaje.
2. `procesarEntradaUsuario` es la función principal que simula obtener el nombre y luego llama a la función *callback* (`saludar`) pasando el nombre.

Cuando llamamos a `procesarEntradaUsuario(saludar);`, imprime: 
```
Hola, Juan!
```

Así de simple. La función *callback* se ejecuta cuando se necesita, después de que la función principal hizo su trabajo.
# CLASES
Las clases en javascript llegan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada es `Es6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la programacion orientada a objetos con la llegada de las `clases`.
## ESTRUCTURA DE UNA CLASE EN JAVASCRIPT
Una clase esta separada en 3 grandes secciones.

1. el nombre de la clase debera ser en singular y en PascalCase
2. debera tener atributos (valores o variables), estos deberan ser sustantivos y estar escritos en camelCase
3. deberan tener metodos (acciones, funciones), estos deberan ser verbos o estar escritos en camelCase.

> [!NOTE]
> Una entidad: es cualquier cosa que puedes describir o que tiene atributos y acciones ejmplo carro.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){return "estoy encendiendo"}
    apagar(){return "estoy cerrando sesion y guardando informacion antes del apagado"}
    escribir(){return "escribiendo mi informe"}
    jugar(){return "jugando dota"}
}
//instanciar
let miPc()=new Computador("gigabyte")
miPc.encender()
```
>[!NOTE]
>prototype=funcion
>clase=metodo 
