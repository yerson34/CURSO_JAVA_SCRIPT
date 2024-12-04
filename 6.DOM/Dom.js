// console.log(parrafo dos)
const cuadro = document.querySelector("#cuadro");

cuadro.addEventListener("click", () => {
    cuadro.style.backgroundColor = "blue";
});

cuadro.addEventListener("dblclick", () => {
    cuadro.style.backgroundColor = "gray";
});
