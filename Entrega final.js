function Persona(id, nombre, edad, consulta){
this.id = id;
this.nombre = nombre;
this.edad = edad;
this.consulta = consulta;
}
const personas = [];

for (let i=1; i <= 3; i++) {

    const nombre = prompt ("Ingrese su nombre");
    const edad = parseInt (prompt("Ingrese su edad"));    
    const consulta = prompt ("cual es su consulta");
    
    const persona = new Persona (i, nombre, edad, consulta);

    personas.push(persona);
    
    }
    personas.forEach((persona) => {
        alert(persona.id  + persona.nombre)
    });
    

const precios = [
    {nombre: "caries", precio: 1000 },
    {nombre: "Blanqueamiento", precio: 3000},
    {nombre: "sellantes", precio: 600},
];

const PrecioTarjeta = precios.map ((elemento) => {
    return { nombre: elemento.nombre, precio: elemento.precio * 1.22 };
});
console.log(PrecioTarjeta)