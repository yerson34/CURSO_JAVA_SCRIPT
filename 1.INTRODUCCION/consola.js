//para mostrar texto plano (sin formato)
// podemos evaluar suma de numeros y tambien si la informacion es falso o verdadero
console.log("mensaje de texto sin formato")
//para mostrar informacion
console.info("mensaje de texto informativo")

//error tipo sintaxis
//console.inf("error de sintaxis")

//mensaje de error
console.error("mensaje de texto de error")
//mensaje de alerta
console.warn("mensaje de texto alerta")
//error de logica, no lo suma, lo concatena
console.log("4"+"6") 
//solucion
console.log(5+6)
//mensaje precaucion, error indefinido
let hola
console.log("hola")
//mensaje de consola de gestion de tiempo
console.time("tiene que ser el mismo mensaje")
edad=18
if (edad >= 18){
console.log("eres mayor de edad")}
else{
console.warn("eres pulpin") }
console.timeEnd("tiene que ser el mismo mensaje")
//mostrar numero del 1-100 con time
console.time("tiempo")
for (let i=0;i<=100;i++){
    console.log(i)
}
console.timeEnd("tiempo")
//mensaje de tipo tabla
console.table("soy una tabla, edwin es un clavo")
lenguajes=[
    {nombre_:"javascript",extension:".js"},
    {nombre_:"python",extension:".py"},
    {nombre_:"php",extension:".php"}
 ]
 console.log(lenguajes)
 console.table(lenguajes)