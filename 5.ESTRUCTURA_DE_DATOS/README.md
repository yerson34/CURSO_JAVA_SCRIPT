# Indice
- [Indice](#indice)
- [Estructura de datos](#estructura-de-datos)
  - [Lista o Array](#lista-o-array)
    - [Creacion](#creacion)
    - [Acceder a un elemnto del array](#acceder-a-un-elemnto-del-array)
    - [Metodos](#metodos)
  - [Objetos](#objetos)
    - [Creacion](#creacion-1)
    - [Acceder a un elemnto del objeto](#acceder-a-un-elemnto-del-objeto)
    - [Metodos](#metodos-1)
# Estructura de datos
A parte de los tipos de datos primitivos javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos, deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiendte o en conjunto.
Son los siguientes
## Lista o Array
Las listas en javascript son un tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separado por comas, cada tipo de dato que se almacene en una lista se le conoce como `elemento`.
Asi cada `elemento` estara separado por una coma. 
### Creacion
Primero debemos crear un enlace (una variable) y luego le asignamos (con simbolo =) la lista que se cree con `corchetes []`, los elementos estaran dentro de los corchetes sepaardos por comas.
```js
//estoy creando una lista vacia
let miLista=[]
//creando una lista de numeros
let numero=[2,4,5,6,7,8]
//creando una lista de nombres
let nombre=["edwin","jory","adan","nadine"]
//crear una lista mixta
let listaMixta=["edwin"1,"feli",2,false,["hola","mundo"]]
```
### Acceder a un elemnto del array
para poder acceder aun elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico. Este indice es incremental y comenzara de 0 con el primer elemento, el ultimo elemento sera la cantidad de elementos menos 1.
```js
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
```
Existe otra manera de acceder a lo eleemntos de una lista, esto se logra recorriendo cada elemento de una lista, esto se logra con un bucle `for`.
```js
let nombres=["edwin","orlando","jory","cristian"]
for (let i=0<nombres.length,i++){
  console.log(nombres[i])
}
```
### Metodos
los metodos son funciones que nos permiten modificar, crear, actualizar y eliminar los elementos de una lista. Todas las variables que almacena una lista nos permite acceder a sus metodos, poniendo un punto despues del nombre de la variable.
- metodo para recuperar la longitud de elementos que tiene una lista,.
```js
let numeros=[2,3,4,5,6]
numeros.length
//accedemos al metodo de una lista con un punto
```
- metodo para agregar un elemento al final de la lista.
```js
let vocales=["a"]
vocales.push("e")

```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e","i"]
//por defecto elimina el ultimo elemento de la lista
vocales.pop()
```
## TAREA
Averiguar que otros metodos exiten para el tratamiento de listas en javascript:
En JavaScript, existen muchos métodos para trabajar con listas (o *arrays*) que permiten realizar operaciones como agregar, eliminar, transformar, ordenar y más. A continuación, te mencionaré algunos de los métodos más comunes y útiles para tratar listas:

### 1. **Métodos para agregar elementos**

- **`push()`**: Agrega uno o más elementos al final de un array.
  ```javascript
  let arr = [1, 2, 3];
  arr.push(4);  // [1, 2, 3, 4]
  ```

- **`unshift()`**: Agrega uno o más elementos al principio de un array.
  ```javascript
  let arr = [1, 2, 3];
  arr.unshift(0);  // [0, 1, 2, 3]
  ```

### 2. **Métodos para eliminar elementos**

- **`pop()`**: Elimina el último elemento de un array.
  ```javascript
  let arr = [1, 2, 3];
  arr.pop();  // [1, 2]
  ```

- **`shift()`**: Elimina el primer elemento de un array.
  ```javascript
  let arr = [1, 2, 3];
  arr.shift();  // [2, 3]
  ```

- **`splice()`**: Elimina elementos de un array en una posición específica. También puede usarse para agregar elementos.
  ```javascript
  let arr = [1, 2, 3, 4];
  arr.splice(1, 2);  // Elimina 2 elementos a partir del índice 1, resultando en [1, 4]
  ```

### 3. **Métodos para acceder o modificar elementos**

- **`slice()`**: Crea un nuevo array que contiene una copia superficial de una porción del array original.
  ```javascript
  let arr = [1, 2, 3, 4];
  let sliced = arr.slice(1, 3);  // [2, 3]
  ```

- **`concat()`**: Combina dos o más arrays en uno solo, sin modificar los originales.
  ```javascript
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let combined = arr1.concat(arr2);  // [1, 2, 3, 4]
  ```

- **`join()`**: Une todos los elementos de un array en una cadena, separados por un delimitador especificado.
  ```javascript
  let arr = ['a', 'b', 'c'];
  let joined = arr.join('-');  // "a-b-c"
  ```

### 4. **Métodos de búsqueda y prueba de elementos**

- **`indexOf()`**: Devuelve el índice de la primera aparición de un valor en un array, o -1 si no se encuentra.
  ```javascript
  let arr = [10, 20, 30];
  arr.indexOf(20);  // 1
  ```

- **`includes()`**: Devuelve `true` si el array contiene el valor, y `false` si no.
  ```javascript
  let arr = [1, 2, 3];
  arr.includes(2);  // true
  ```

- **`find()`**: Devuelve el primer elemento que cumple con la condición de la función proporcionada.
  ```javascript
  let arr = [5, 10, 15];
  let found = arr.find(x => x > 7);  // 10
  ```

- **`findIndex()`**: Devuelve el índice del primer elemento que cumple con la condición.
  ```javascript
  let arr = [1, 3, 5, 7];
  let index = arr.findIndex(x => x > 4);  // 2
  ```

### 5. **Métodos de transformación de arrays**

- **`map()`**: Crea un nuevo array con los resultados de aplicar una función a cada elemento.
  ```javascript
  let arr = [1, 2, 3];
  let squared = arr.map(x => x * x);  // [1, 4, 9]
  ```

- **`filter()`**: Crea un nuevo array con todos los elementos que cumplan con la condición especificada.
  ```javascript
  let arr = [1, 2, 3, 4];
  let evens = arr.filter(x => x % 2 === 0);  // [2, 4]
  ```

- **`reduce()`**: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.
  ```javascript
  let arr = [1, 2, 3];
  let sum = arr.reduce((acc, val) => acc + val, 0);  // 6
  ```

- **`reduceRight()`**: Similar a `reduce()`, pero procesa los elementos del array de derecha a izquierda.
  ```javascript
  let arr = [1, 2, 3];
  let product = arr.reduceRight((acc, val) => acc * val, 1);  // 6
  ```

### 6. **Métodos para ordenar y reorganizar**

- **`sort()`**: Ordena los elementos de un array en su lugar, modificando el array original.
  ```javascript
  let arr = [3, 1, 4, 2];
  arr.sort();  // [1, 2, 3, 4]
  ```

- **`reverse()`**: Invierte el orden de los elementos de un array.
  ```javascript
  let arr = [1, 2, 3];
  arr.reverse();  // [3, 2, 1]
  ```

### 7. **Métodos adicionales útiles**

- **`forEach()`**: Ejecuta una función en cada elemento del array.
  ```javascript
  let arr = [1, 2, 3];
  arr.forEach(x => console.log(x));  // 1, 2, 3
  ```

- **`some()`**: Verifica si al menos un elemento del array cumple con la condición.
  ```javascript
  let arr = [1, 2, 3];
  let hasNegative = arr.some(x => x < 0);  // false
  ```

- **`every()`**: Verifica si todos los elementos del array cumplen con la condición.
  ```javascript
  let arr = [1, 2, 3];
  let allPositive = arr.every(x => x > 0);  // true
  ```

- **`flat()`**: Aplana un array multidimensional en un array de una sola dimensión.
  ```javascript
  let arr = [1, [2, 3], [4, 5]];
  let flat = arr.flat();  // [1, 2, 3, 4, 5]
  ```

- **`flatMap()`**: Primero mapea cada elemento usando una función y luego aplana el resultado.
  ```javascript
  let arr = [1, 2, 3];
  let flatMapResult = arr.flatMap(x => [x, x * 2]);  // [1, 2, 2, 4, 3, 6]
  ```

### Conclusión
Estos son solo algunos de los métodos más comunes y útiles para trabajar con listas en JavaScript. Existen otros métodos menos utilizados, pero cada uno de estos métodos proporciona una forma eficiente de manipular arrays en diferentes situaciones, desde agregar o eliminar elementos hasta transformar y buscar en las listas.

## Objetos
### Creacion
### Acceder a un elemnto del objeto
### Metodos
