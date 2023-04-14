const obj = {nombre:"Maximiliano", apellido:"Botero", edad:45, altura:1.67, desarrollador:true}
let edad = obj.edad
console.log(edad)
let lista = [obj, {nombre:"Blanca", apellido:"Pizarro", edad:54}, {nombre:"Mario", apellido:"Usma", edad:43}]
console.log(lista)
let listaOrdenada = lista.sort((a,b) => b.edad-a.edad)
console.log(listaOrdenada)
