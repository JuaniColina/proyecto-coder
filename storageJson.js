
localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", 20);
localStorage.setItem("consulta", "Caries");



const PacientesAgendados = {nombre: " Juan", edad:  20, consulta: " Caries"};

let stringify = JSON.stringify(PacientesAgendados)
localStorage.setItem("Paciente", stringify);

let Objetificado = JSON.parse(localStorage.getItem("Paciente"))
console.dir(Objetificado);

