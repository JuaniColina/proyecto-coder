let tratamientos = []
const arrlocalstorage = JSON.parse(localStorage.getItem("tratamientos"))
const items = document.getElementById("items")
if (arrlocalstorage){
    tratamientos = arrlocalstorage
    rellenarTabla()
}



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
    localStorage.setItem("tratamientos", JSON.stringify(tratamientos))
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
async function rellenarSelect(){

    const select = document.getElementById('Tratamientos');

    const call = await fetch('/servicios.json');
    const resp = await call.json();

    resp.forEach( (tratamiento) => {
        const texto = `${tratamiento.nombre} - ${tratamiento.precio}`;
        const opt = document.createElement('option');
        opt.value = texto;
        opt.textContent = texto;
        select.appendChild(opt);
    });
    

}