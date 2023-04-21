class Estudiante {
    constructor (nombre, asignaturas = ["javascript","html","CSS"]) {
        this.nombre = nombre
        this.asignaturas = asignaturas 
    }
    obtenDatos = () => {
        const objeto = {nombre:this.nombre,asignaturas:this.asignaturas}
        return objeto
    }
}

const student = new Estudiante("Demerito")
console.log( student.obtenDatos() )
