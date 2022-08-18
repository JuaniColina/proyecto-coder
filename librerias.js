const button = document.querySelector('#reservar')
button.addEventListener('click', () =>{
    Swal.fire({
        tittle: "Genial!",
        text:"Su reserva se agendo correctamente",
        icon:"success",
        confirmButton: "Continuar"
    })  
})