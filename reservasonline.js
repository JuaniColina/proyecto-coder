function Paciente(nombre, apellido, telefono, consulta){
    this.nombre = nombre
    this.apellido = apellido
    this.telefono = telefono
    this.consulta = consulta
} 


let reservas = []
  
let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let telefono = document.getElementById("Telefono");
let consulta = document.getElementById("Consulta");
let consultar = document.getElementById("consultar");
let reservar = document.getElementById("reservar");


reservar.onclick = (e)=>{
    e.preventDefault (); 
  reservas.push(
    new Paciente(nombre.value, apellido.value, telefono.value, consulta.value)
    );
    
};

const reservas1 = [...reservas]
console.log(reservas1)


const paciente = {
  nombre: "Juan",
  edad: 24,
  consulta: "Caries"
}

console.log(paciente?. consulta?.caries || "Esa consulta no existe" )

let objeto = {paciente1: "juan", paciente2: "Fernando"}
let {paciente1, paciente2} = objeto 


const button = document.querySelector('#reservar')

button.addEventListener('click', () =>{
   
  const nombre = document.querySelector("#Nombre");
  const apellido = document.querySelector("#Apellido");
  const telefono = document.querySelector("#telefono");
  const comentario = document.querySelector("#comentario");
  const consulta = document.querySelector("#Consulta");

  const arrValidaciones = [nombre, apellido, telefono, comentario, consulta];
  let esValido = true;
  const validar = [];

  arrValidaciones.forEach(elemento => {
    if(!elemento.value){
      esValido.push(elemento.id);
    }
  })

  if(!esValido){
    Swal.fire({
      tittle: "ERROR!",
      text:`Falta completar los siguientes campos: ${camposFaltantes(validar)}`,
      icon: "warning",
      confirmButton: "Continuar"
    })
  }else{
    Swal.fire({
      tittle: "Genial!",
      text:"Su reserva se agendo correctamente",
      icon:"success",
      confirmButton: "Continuar"
    })  
  }
 
 })
function camposFaltantes(arr = []){

  let msg = ``;

  arr.forEach(elemento => {
    msg += elemento.toUpperCase() + " "
  
  })

  return msg;
}
