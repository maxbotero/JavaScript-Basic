const nombre = "Max"
const apellido = "Botero"
const objeto = {nombre:nombre, apellido:apellido}
sessionStorage.setItem("persona", JSON.stringify(objeto))
localStorage.setItem("persona", JSON.stringify(objeto))

let fecha = new Date()
let horaActual = fecha.getTime()
let tiempo = horaActual + 1000 * 120 
fecha.setTime(tiempo) 

document.cookie = "micookie=" + JSON.stringify(objeto) + ";expires=" + fecha.toUTCString() + "path=/"
