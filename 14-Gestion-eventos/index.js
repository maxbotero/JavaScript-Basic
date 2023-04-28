const boton = document.querySelector("#boton")

boton.addEventListener("click", () => {
    alert("click en el botón")
})

//jQuery:
$(document).ready(() => {
    $("#boton").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
})
