const logger = require('./logger')
const numero = "1492"
function miFuncion(num) {
  if(typeof num !== "number"){
    throw TypeError("Se requiere un dato tipo número")
  }
  console.log(`el numero es ${num}`) 
}

try {
  miFuncion(numero)
}catch(e){
  console.log(e.message)
  logger.error(e.message)
}
