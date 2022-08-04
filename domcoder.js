let carrito = [];
let opcion;




function agregarItemHTML(item) {
    let row = document.createElement("tr");
    row.innerHTML = `<th>${item.nombre}</th>
                    <th>${item.cantidad}</th>
                    <th>${item.precio}</th>`
                    
 tabla.append(row);
}

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
    opcion =(prompt(
        "Elija la opcion deseada\n1- Checkout\n2- Exit"
    ));
    switch (opcion) {
    case 1:
            let total = checkout();
            alert("El precio total de su compra es: " + total);
            document.getElementById("total").innerText = `El total es ${total}`;
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





let boton = document.getElementById("boton");

boton.addEventListener("click" , ()=>{
    alert("Su mensaje fue enviado")
})