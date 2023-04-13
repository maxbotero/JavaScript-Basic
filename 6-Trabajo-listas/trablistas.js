let mercado = ["huevos", "tomates", "cebolla", "sal", "bananos"]
mercado.push("aceite de girasol")
//console.log(mercado)
mercado.pop()
//console.log(mercado)
let peliculas = [ {titulo: "The Secret Garden", director: "Agnieszka Holland", fecha: new Date("1993-08-13")}, {titulo: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", fecha: new Date("2001-12-25")}, {titulo: "The Hunt", director: "Craig Zobel", fecha: new Date("2020-03-11")} ]
//console.log(peliculas)
let nuevaLista = peliculas.filter(valor => valor.fecha < new Date("2010-01-01"))
//console.log(nuevaLista)
let directores = peliculas.map(valor => valor.director)
//console.log(directores)

let titulos = peliculas.map(valor => valor.titulo)
//console.log(titulos)

let unionListas = directores.concat(titulos)
//console.log(unionListas)

let unionListasPropag = [...directores, ...titulos]
//console.log(unionListasPropag)
