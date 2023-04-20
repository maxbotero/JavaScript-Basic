import * as moduloMatematicas from './modulos/controller.js'
import chalk from 'chalk';

let producto = moduloMatematicas.multiplica(moduloMatematicas.suma(1,2), moduloMatematicas.suma(4,5)) 
console.log(chalk.green(producto))
