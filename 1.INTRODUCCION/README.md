# INTRODUCCION
- [INTRODUCCION](#introduccion)
  - [Comentarios](#comentarios)
  - [Tipos de Comentarios](#tipos-de-comentarios)
  - [La consola](#la-consola)
    - [Tipos de mensaje por consola](#tipos-de-mensaje-por-consola)
      - [1. Notificadores](#1-notificadores)
      - [2. Gestion de tiempo](#2-gestion-de-tiempo)
      - [3. Tablas](#3-tablas)
  - [Naiming](#naiming)
  - [Usos incorrectos](#usos-incorrectos)
  - [Usos correctos](#usos-correctos)
## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlo para silenciar temporalmente partes del codigo *(comentar codigo)*.

## Tipos de Comentarios
1. **Una sola Linea**
   ```
   //comentario de una sola linea
   ```
2. **Multiples Lineas**
   ```
   /*comentario de multilinea*/
   ```
3. **JsDoc**
   ```
   /**
   *esta es una linea
   *esta es otra linea
   *
   ```
   Este tipo de comentario es muy usado para documentar el codigo, usado generalmente para la explicacion de funciones y clases en `Js`.
   [link del archivo](./comentarios.js)

## La consola
La herramienta de JavaScript mas usada dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo

>[!TIP]
> ##### depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces del desarrollo, y verificar que el mensaje mostrado sea el correto. y verificando que el codigo no tenga errores de sintaxis de logica o de precaucion.

### Tipos de mensaje por consola
#### 1. Notificadores
Mostrar un mensaje por consola (sin formato)
```js
console.log("hola mundo") 
```
Mostrar un mensaje de estilo informativo
```js
console.info("mensaje de tipo informativo")
```
Mostrar un mensaje de estilo alerta
```js
console.warn("mensaje de tipo alerta")
```
Mostrar un mensaje de estilo error
```js
console.error("mensaje de error")
```
#### 2. Gestion de tiempo
Este tipo de mensaje nos sirve para ver la duracion de ejcucion de nuestro codigo y poder optimizarlo, para hacer uso de esta herramienta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la durcion y finalmente terminar el time de la consola con `timeEnd()`
```js
edad=18
if (edad >= 18){
console.log("eres mayor de edad")}
else{
console.warn("eres pulpin") }
```
#### 3. Tablas
Este tipo de mensaje por consola nos muestra la informacion en una tabla.
Solo dara formato a los datos de tipo `array` ([]) y `objetos` ({}).
```js
lenguajes=[
    {nombre_:"javascript",extension:".js"},
    {nombre_:"python",extension:".py"},
    {nombre_:"php",extension:".php"}
 ]
```
[para ver los ejemplos has clic aqui](consola.js)
## Naiming
Es la tecnica para para nombrar variables, funcion y clases dentro de un lenguaje de proghramacion.
Las variables tienen reglas muy especifica que debemos seguir a la hora de designar sus nombres.
## Usos incorrectos
- Nose pueden usar espacios
> [!WARNING]
>  ```js
> #INCORRECTO
>  con espacios=45
>  ```
- No usar un numero delante
> [!WARNING]
>  ```js
> #INCORRECTO
>  1numero=45
>  ```
- Evitar simbolos y `snake_case`
> [!WARNING]
>  ```js
> #INCORRECTO
>  dame$=45
> #INCORRECTO
>  con_guiones_bajos="no es correcto"
>  ```
## Usos correctos
- Debemos usar nombres que expliquen que aporta esa variable a nuestro codigo
- Debemos de usar la tecnica `camelCase`.
> [!TIP]
>  ```js
> #CORRECTO
>  edadAlumno=45
>  ```
