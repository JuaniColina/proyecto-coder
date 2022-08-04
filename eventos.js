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