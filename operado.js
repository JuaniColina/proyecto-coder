const paciente = {
    nombre: "Juan",
    edad: 24,
    consulta: "Caries"
}

console.log(paciente?. consulta?.caries || "Esa consulta no existe" )

let objeto = {paciente1: "juan", paciente2: "Fernando"}
let {paciente1, paciente2} = objeto 