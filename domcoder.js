let carrito = [];
let opcion;

const items = document.getElementById ("items")


function agregarItemHTML(item) {
    let row = document.createElement("tr");
    row.innerHTML = `<th>${item.nombre}</th>
                    <th>${item.cantidad}</th>
                    <th>${item.precio}</th>`
                    
 items.append(row);
}

function Productos(Tratamiento, Precio){
    this.Tratamiento = Tratamiento;
    this.Precio = Precio;
    this.cantidad = 1
}

const Tratamiento = prompt ("Ingrese tratamiento a realizarse");
const Precio = parseInt(prompt ("Ingrese el monto asignaod a su consulta"));

const producto = new Productos (Tratamiento, Precio);
carrito.push(producto);


function checkout() {
    return carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
    );
}
function mostrarCarrito(carrito) {
    console.clear();
    for (const elemento of carrito) {
        console.log(elemento);
    }
}
mostrarCarrito(carrito);
do {
    opcion = parseInt(prompt(
        "Elija la opcion deseada\n1- Checkout\n2- Exit"
    ));
    switch (opcion) {
    case 1:
            let total = checkout();
            alert("El precio total de su compra es: " + total);
            document.getElementById("total").innerText = `El total es ${total}`;
            break;
    case 2:
            alert("Adios!");
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }
}while (opcion != 1 && opcion != 2);

carrito.forEach((item) => {
    agregarItemHTML(item);
});
