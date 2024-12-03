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
let titulo=document,queryselector

```
El método `querySelector` en JavaScript es una poderosa herramienta para seleccionar elementos del DOM utilizando selectores CSS. Es ideal para trabajar con cualquier elemento HTML de forma precisa y flexible.

---

### **Sintaxis**
```javascript
const elemento = document.querySelector(selector);
```

- **`selector`**: Un string que describe el elemento a seleccionar usando la sintaxis de selectores de CSS.
- Devuelve **el primer elemento** que coincida con el selector. Si no encuentra ningún elemento, devuelve `null`.

---

### **Ejemplos de uso**
1. **Seleccionar por ID**
   ```javascript
   const elemento = document.querySelector("#miId");
   console.log(elemento); // Devuelve el elemento con ID "miId"
   ```

2. **Seleccionar por clase**
   ```javascript
   const elemento = document.querySelector(".miClase");
   console.log(elemento); // Devuelve el primer elemento con la clase "miClase"
   ```

3. **Seleccionar por etiqueta**
   ```javascript
   const elemento = document.querySelector("p");
   console.log(elemento); // Devuelve el primer <p> encontrado
   ```

4. **Combinaciones avanzadas**
   - Seleccionar elementos dentro de otros:
     ```javascript
     const elemento = document.querySelector("#contenedor .item");
     console.log(elemento); // Devuelve el primer elemento con clase "item" dentro del elemento con ID "contenedor"
     ```

   - Usar atributos:
     ```javascript
     const elemento = document.querySelector("input[type='text']");
     console.log(elemento); // Devuelve el primer <input> con tipo "text"
     ```

   - Selectores jerárquicos:
     ```javascript
     const elemento = document.querySelector("ul > li");
     console.log(elemento); // Devuelve el primer <li> hijo directo de un <ul>
     ```

5. **Pseudo-clases**
   ```javascript
   const elemento = document.querySelector("li:first-child");
   console.log(elemento); // Devuelve el primer <li> en la lista
   ```

---

### **Diferencias con `querySelectorAll`**
- **`querySelector`**: Devuelve **solo el primer elemento** que coincide con el selector.
- **`querySelectorAll`**: Devuelve **todos los elementos** que coinciden, en una **NodeList**.

```javascript
const todos = document.querySelectorAll(".miClase");
console.log(todos); // Devuelve una NodeList con todos los elementos con la clase "miClase"
```

---

### **Validación y uso seguro**
Antes de manipular un elemento, verifica si existe:

```javascript
const elemento = document.querySelector("#noExiste");
if (elemento) {
   elemento.textContent = "¡Elemento encontrado!";
} else {
   console.log("El elemento no existe.");
}
```

---

### Ventajas
- Compatible con cualquier selector CSS.
- Más flexible y moderno que métodos como `getElementById` o `getElementsByClassName`.
Las **propiedades del DOM (Document Object Model)** son atributos que permiten acceder y manipular el contenido, estructura y estilo de los elementos HTML de una página web. A continuación, te presento las propiedades más comunes y útiles del DOM:

---

### **Propiedades principales del DOM**

1. **`document`**
   - Representa el documento HTML completo cargado en el navegador.
   - Ejemplo:
     ```javascript
     console.log(document.title); // Muestra el título del documento
     ```

2. **`innerHTML`**
   - Obtiene o establece el contenido HTML dentro de un elemento.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("#miDiv");
     elemento.innerHTML = "<p>Nuevo contenido HTML</p>";
     ```

3. **`textContent`**
   - Obtiene o establece solo el texto dentro de un elemento, sin incluir etiquetas HTML.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("#miDiv");
     elemento.textContent = "Nuevo texto sin HTML.";
     ```

4. **`value`**
   - Obtiene o establece el valor de un campo de formulario (`input`, `textarea`, etc.).
   - Ejemplo:
     ```javascript
     const input = document.querySelector("#miInput");
     console.log(input.value); // Muestra el valor actual del input
     input.value = "Nuevo valor";
     ```

5. **`className`**
   - Obtiene o establece las clases CSS de un elemento como un string.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("#miDiv");
     elemento.className = "nuevaClase otraClase";
     ```

6. **`classList`**
   - Proporciona métodos para manipular clases CSS de un elemento.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("#miDiv");
     elemento.classList.add("nuevaClase");  // Añade una clase
     elemento.classList.remove("otraClase"); // Elimina una clase
     console.log(elemento.classList.contains("nuevaClase")); // Verifica si tiene una clase
     ```

7. **`id`**
   - Obtiene o establece el ID de un elemento.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("div");
     console.log(elemento.id); // Muestra el ID del elemento
     elemento.id = "nuevoID";
     ```

8. **`style`**
   - Permite acceder o modificar los estilos CSS inline de un elemento.
   - Ejemplo:
     ```javascript
     const elemento = document.querySelector("#miDiv");
     elemento.style.color = "red";
     elemento.style.backgroundColor = "yellow";
     ```

9. **`children`**
   - Devuelve una colección de los elementos hijos directos de un elemento.
   - Ejemplo:
     ```javascript
     const lista = document.querySelector("ul");
     console.log(lista.children); // NodeList de los <li> dentro del <ul>
     ```

10. **`parentElement`**
    - Devuelve el elemento padre de un nodo.
    - Ejemplo:
      ```javascript
      const elemento = document.querySelector("#miHijo");
      console.log(elemento.parentElement); // Devuelve el elemento padre
      ```

11. **`firstChild` / `lastChild`**
    - Devuelven el primer o último nodo hijo (puede incluir texto, comentarios, etc.).
    - Ejemplo:
      ```javascript
      const elemento = document.querySelector("#miDiv");
      console.log(elemento.firstChild); // Primer hijo
      console.log(elemento.lastChild);  // Último hijo
      ```

12. **`firstElementChild` / `lastElementChild`**
    - Devuelven el primer o último **elemento** hijo (excluyen nodos de texto y comentarios).
    - Ejemplo:
      ```javascript
      const elemento = document.querySelector("#miDiv");
      console.log(elemento.firstElementChild);
      ```

13. **`attributes`**
    - Devuelve una colección de todos los atributos del elemento.
    - Ejemplo:
      ```javascript
      const elemento = document.querySelector("#miDiv");
      console.log(elemento.attributes); // Lista de atributos
      ```

14. **`dataset`**
    - Accede a los atributos `data-*` personalizados de un elemento.
    - Ejemplo:
      ```javascript
      const elemento = document.querySelector("#miDiv");
      console.log(elemento.dataset.valor); // Si existe data-valor="..."
      elemento.dataset.nuevo = "NuevoDato"; // Crea data-nuevo="NuevoDato"
      ```

---

### **Propiedades del DOM para Navegar**
- **`nextSibling` / `previousSibling`**: Nodo siguiente o anterior en el mismo nivel.
- **`nextElementSibling` / `previousElementSibling`**: Elemento siguiente o anterior en el mismo nivel.

```javascript
const elemento = document.querySelector("#miDiv");
console.log(elemento.nextElementSibling); // Siguiente hermano elemento
```

Las acciones sobre eventos en el DOM permiten interactuar con los elementos de una página web. Usando JavaScript, puedes escuchar eventos (como clics, teclas, movimientos del ratón, etc.) y realizar acciones en respuesta.

---

### **Cómo trabajar con eventos en el DOM**
1. **Usar el atributo HTML `onclick` (no recomendado)**  
   Definir directamente en el HTML:
   ```html
   <button onclick="alert('¡Hiciste clic!')">Haz clic</button>
   ```
   Es funcional, pero no se recomienda porque mezcla HTML y JavaScript.

2. **Asignar un manejador de eventos con JavaScript**
   Utilizando la propiedad del evento, como `onclick`:
   ```javascript
   const boton = document.querySelector("#miBoton");
   boton.onclick = () => {
       alert("¡Botón clickeado!");
   };
   ```

3. **Usar `addEventListener` (mejor práctica)**
   Permite asociar múltiples eventos al mismo elemento sin sobrescribir otros:
   ```javascript
   const boton = document.querySelector("#miBoton");
   boton.addEventListener("click", () => {
       alert("¡Usaste addEventListener!");
   });
   ```

---

### **Tipos de eventos comunes**

#### **Eventos de mouse**
- `click`: Cuando se hace clic en un elemento.
- `dblclick`: Doble clic.
- `mouseover`: Cuando el mouse pasa sobre un elemento.
- `mouseout`: Cuando el mouse sale de un elemento.
- `mousemove`: Movimiento del mouse dentro de un área.

```javascript
const div = document.querySelector("#miDiv");

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "yellow";
});

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "white";
});
```

#### **Eventos de teclado**
- `keydown`: Cuando se presiona una tecla.
- `keyup`: Cuando se suelta una tecla.

```javascript
document.addEventListener("keydown", (evento) => {
    console.log(`Tecla presionada: ${evento.key}`);
});
```

#### **Eventos de formulario**
- `submit`: Cuando se envía un formulario.
- `input`: Cuando cambia el valor de un campo.
- `change`: Cuando un campo pierde el foco después de cambiar su valor.
- `focus` / `blur`: Cuando un campo obtiene o pierde el foco.

```javascript
const formulario = document.querySelector("#miFormulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene que el formulario se envíe
    alert("Formulario enviado");
});
```

#### **Eventos de carga**
- `load`: Cuando la página o un recurso se ha cargado completamente.
- `DOMContentLoaded`: Cuando el DOM está completamente cargado, pero sin esperar imágenes u otros recursos.

```javascript
window.addEventListener("DOMContentLoaded", () => {
    console.log("¡El DOM está listo!");
});
```

#### **Eventos de ventana**
- `resize`: Cuando se cambia el tamaño de la ventana.
- `scroll`: Cuando se hace scroll en la página.

```javascript
window.addEventListener("resize", () => {
    console.log(`Nuevo tamaño: ${window.innerWidth}x${window.innerHeight}`);
});
```

---

### **Ejemplo práctico: Cambiar texto al hacer clic**
HTML:
```html
<button id="botonTexto">Haz clic aquí</button>
<p id="parrafo">Texto original</p>
```

JavaScript:
```javascript
const boton = document.querySelector("#botonTexto");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    parrafo.textContent = "¡Texto cambiado!";
});
```

---

### **Ejemplo: Interacción avanzada con el mouse**
Cambia el color de un cuadro al hacer clic y vuelve al color original al hacer doble clic.

HTML:
```html
<div id="cuadro" style="width: 100px; height: 100px; background: gray;"></div>
```

JavaScript:
```javascript
const cuadro = document.querySelector("#cuadro");

cuadro.addEventListener("click", () => {
    cuadro.style.backgroundColor = "blue";
});

cuadro.addEventListener("dblclick", () => {
    cuadro.style.backgroundColor = "gray";
});
```
>Tecnlogias para el procesamineto de texto a travez de marcado ["markup"]
(etiquetas-  uqe nos permite derle un estilo o signigicado al contenido de las etiquetas).La primera tecnologia fue ["xml"] depues nace ["html"] , depueds sigue la ultima generacion de tecnologias de markado de texto ["markdom"].
