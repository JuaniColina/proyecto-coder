let IngresarTurno;
for ( IngresarTurno = 1; IngresarTurno <= 20; IngresarTurno++) {
    let IngresarTurno = prompt ("Ingrese el turno que desee")
    while (isNaN (IngresarTurno)){
      IngresarTurno = prompt ("Por favor ingrese un turno (númerico)")
    }
    let IngresarNombre = prompt ("Ingrese su Nombre")
    alert ("turno N°" + IngresarTurno  +  " Nombre " +  IngresarNombre);
}
    