let tratamientos = []

const items = document.getElementById("items")


function agregarItemHTML(item) {
    let row = document.createElement("tr");
    row.innerHTML = `<th>${item.nombre}</th>
                    <th>${item.cantidad}</th>
                    <th>${item.precio}</th>`

    items.append(row);
}

function Consulta(Tratamiento, precio) {
    this.Tratamiento = Tratamiento;
    this.cantidad = 1
    this.precio = precio;
}

const tratamientosSelect = document.getElementById("Tratamientos");
const confirmar = document.getElementById("reservar");

confirmar.onclick = (e) => {
    e.preventDefault();

    const arrSelect = tratamientosSelect.value.split("-");

    tratamientos.push(
        new Consulta(arrSelect[0], arrSelect[1])
    );
    rellenarTabla();
};


function rellenarTabla(){
    
    items.innerHTML = '';

    tratamientos.forEach( tratamiento => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${tratamiento.Tratamiento}</td>
                        <td>${tratamiento.cantidad}</td>
                        <td>${tratamiento.precio}</td>
                        `
        
        items.appendChild(tr);
    });

}