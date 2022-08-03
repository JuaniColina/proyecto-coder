let carrito = [];
let opcion;

carrito.push(new Item("Monitor", 1, 40000));
carrito.push(new Item("Mouse", 2, 5000));
carrito.push(new Item("Parlante", 4, 15000));
carrito.push(new Item("Estabilizador de tension", 1, 5000));

let tabla = document.getElementById("items");

function agregarItemHTML(item) {
    let row = document.createElement("tr");
    row.innerHTML = `<th>${item.nombre}</th>
                    <th>${item.cantidad}</th>
                    <th>${item.precio}</th>`;
/*
    row.innerHTML =
        "<th>" +
        item.nombre +
        "</th><th>" +
        item.cantidad +
        "</th><th>" +
        item.precio +
        "</th>";*/
    tabla.append(row);
}

function ingresoInt(mensaje) {
    let numero = parseInt(prompt(mensaje));
    while (isNaN(numero) || numero < 0) {
        numero = parseInt(prompt("Valor incorrecto, " + mensaje));
    }
    return numero;
}

function ingresoFloat(mensaje) {
    let numero = parseFloat(prompt(mensaje));
    while (isNaN(numero) || numero < 0) {
        numero = parseFloat(prompt("Valor incorrecto, " + mensaje));
    }
    return numero;
}

function crearItem() {
    let nombre = prompt("Ingrese el nombre del item");
    let cant = ingresoInt("Ingrese la cantidad");
    let precio = ingresoFloat("Ingrese el precio del item");
    return new Item(nombre, cant, precio);
}

function buscarItem(nombre, carr) {
    let i = carr.length - 1;
    while (i >= 0 && nombre != carr[i].nombre) {
        i--;
    }
    return i;
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

function aumentarPrecio(valor) {
    return carrito.map((item) => {
        return {
            nombre: item.nombre,
            cantidad: item.cantidad,
            precio: item.precio * valor,
        };
    });
}
mostrarCarrito(carrito);

do {
    opcion = ingresoInt(prompt(
        "Elija la opcion deseada\n1- Agregar item al carrito\n2- Eliminar item del carrito\n3- Aumentar precio\n4- Ordenar\n5- Checkout\n6- Exit"
    ));
    switch (opcion) {
        case 1:
            carrito.push(crearItem());
            break;
        case 2:
            let pos = buscarItem(
                prompt("Ingrese el nombre del item a eliminar"),
                carrito
            );
            if (pos >= 0) {
                carrito.splice(pos, 1);
            }
            break;
        case 3:
            carrito = aumentarPrecio(
                ingresoFloat(
                    "Ingrese el precio a aumentar a todos los productos"
                )
            );
            break;
        case 4:
            carrito.sort(
                (actual, siguiente) => actual.precio - siguiente.precio
            );
            break;
        case 5:
            let total = checkout();
            alert("El precio total de su compra es: " + total);
            document.getElementById("total").innerText = `El total es ${total}`;
        case 6:
            alert("Adios!");
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }
    mostrarCarrito(carrito);
} while (opcion != 5 && opcion != 6);

carrito.forEach((item) => {
    agregarItemHTML(item);
});