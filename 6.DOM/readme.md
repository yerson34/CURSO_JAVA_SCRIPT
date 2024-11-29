# Dom-Document Odject model
Modelo de documentos de odjetos
el DOM es un conjunto de utilidades especificamente diseñadas para ,manipular documentos XML y HTML.
el dom trasform el archivo HTML en un arbol de nodos jerarquico. facilmente manipulable.
el DOM convierte tdo el contenido del archivo HTML en un odjeto de javascrip.
<!-- mi archivo index.html -->
````html
<body>
    <h1 id="titulo">titulo </h1>
    <p class="parrafo">este es la descripcion de mi pagina </p>
<ul>
    <li>primer elemento</li>
    <li>segundo elemento</li>
    <li>tercer elemento</li>
</ul>
</body>
````
<!-- mi archivo script.js -->
```js
document:{
    elemet:body,
    attr:null,
    texto:null,
    child:{
        {element:h1,
         attr:{id :"titulo"}
         text:"titulo"
         child:null
        },
        {
         element:p,
         attr:{class:"parrafo"}
         text:"parrafo"
         child:null
        },
         {
            element: "ul",
            attr: null,
            text: null,
            children: [
                { 
                    element: "li", 
                    attr: null, text: "primer elemento",
                    children: null },
                { 
                    element: "li",
                    attr: null,
                    text: "segundo elemento",
                    children: null },
                { 
                    element: "li", 
                    attr: null, 
                    text: "tercer elemento", 
                    children: null }
            ]
        }
};
```
DOM a demas  de realizar el trabajo de convertir un archivo["html"] en un archivo["HTML"] en un odjeto de javascript, nos ofrece una["API"](Aplication Programing Interfa De Programacion de Aplicaciones)
## selectores
los selevtores nos permieten odtener ocapturar una etiqueta ["HTML"] una etiqueta capturada una o varias etiquetas ["HTML"] incluyendo sus atributos, contenido e hijosd si los tuviera.
los señectores que podemos utilizar son variados podemos capturar a travez de sus atributos como de el nombre de la etiqueta misma .
los selectores son ["funciones"]  si hablamos de poo entonces se puede decir que son ["metodos"].
y son los siguientes 
-**getElementByid**-devuelve un elemento(etiqueta)que tengo un id especifico
```html
<p id="uno">primer-texo</p>
<p id="dos">segundo-texo</p>
```
```js

```
##
> [!NOTE]
>Tecnlogias para el procesamineto de texto a travez de marcado ["markup"]
(etiquetas-  uqe nos permite derle un estilo o signigicado al contenido de las etiquetas).La primera tecnologia fue ["xml"] depues nace ["html"] , depueds sigue la ultima generacion de tecnologias de markado de texto ["markdom"].
