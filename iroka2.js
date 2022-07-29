let num1, num2;

function suma (num1, num2) {
    return num1 + num2
}
num1 = parseInt (prompt ("Para calcular el costo de su consulta debe ingresar el monto solo el número \n Consulta diagnostica $0, previa agenda $500"))
num2 = parseInt (prompt ("Caries $1000, Blanqueamiento $3000 \n Raspado y Alisado $3500, Sellante $600"))
    while (isNaN (num1) && (isNaN(num2) )){
        num1 = parseInt (prompt ("Por favor ingrese un valor númerico \n Consulta diagnostica $0, previa agenda $500"))
        num2 = parseInt (prompt ("Por favor ingrese un valor númerico \n Raspado y Alisado $3500, Sellante $600 \n Caries $1000, Blanqueamiento $3000"))
    }
let resultado = suma(num1, num2)
alert ("El costo de su consulta es de $" + resultado);


function Persona(nombre, edad, consulta) {
    this.nombre = (prompt ("Ingrese su nombre"));
    this.edad = (prompt ("Ingrese su edad"));
    this.consulta = (prompt ("Cual es su consulta"));
}
const Persona1 = new Persona (nombre, edad, consulta); 