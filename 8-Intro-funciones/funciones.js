// Una función sin parámetros que devuelva siempre "true":
function sinparametros(){
    return true;
}

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado:
const miPromesa = new Promise((resolve,reject) => {
        
    if(true){
        
        setTimeout(() => {
            resolve()
        }, "5000")
    }
    else{
        reject();
    }
})

miPromesa
    .then(()=>console.log("Hola soy una promesa"))
    .catch(()=>console.log("Se ha presentado un error"))
    .finally(()=>console.log("se acabó"))

//Una función generadora de índices pares automáticos:
function* generaidpar(){
    let id = 0
    while(true){
        id ++
        if(id % 2 === 0){
            yield id
        }
    }
}

const gen = generaidpar()
//genera 20 indices pares por medio de la funcion generadora generaidpar():
for(let i=0;i<20;i++){
    console.log(gen.next().value)
}
//genera otro indice par:
console.log(gen.next().value)
