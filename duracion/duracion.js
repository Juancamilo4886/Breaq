/* =====================================
   BREAQ - DURACIÓN JS

   - Selección de tiempo
   - Inicio acompañamiento
===================================== */


let tiempo = 1;


// =====================================
// CAMBIAR TIEMPO
// =====================================

function cambiarTiempo(direccion){

    if(direccion === 1){

        if(tiempo === 1){
            tiempo = 5;
        }else{
            tiempo += 5;
        }

    }


    if(direccion === -1){

        if(tiempo === 5){
            tiempo = 1;
        }
        else if(tiempo > 5){
            tiempo -= 5;
        }

    }


    let texto = document.getElementById("minutos");

    if(texto){
        texto.textContent = tiempo;
    }

}



// =====================================
// INICIAR ACOMPAÑAMIENTO
// =====================================

function iniciarAcompanamiento(){


    // Guardar tiempo elegido
    localStorage.setItem(
        "duracionAcompanamiento",
        tiempo
    );


    // Guardar momento de inicio
    localStorage.setItem(
        "inicioAcompanamiento",
        Date.now()
    );


    // Activar estado
    localStorage.setItem(
        "acompanamientoActivo",
        "true"
    );


    // Ir directamente al acompañamiento
    window.location.href =
    "../acompanamiento/acompanamiento.html";


}



// =====================================
// VOLVER
// =====================================

function volver(){

    window.location.href =
    "../dashboard/dashboard.html";

}



// =====================================
// HACER FUNCIONES VISIBLES AL HTML
// =====================================

window.cambiarTiempo = cambiarTiempo;

window.iniciarAcompanamiento = iniciarAcompanamiento;

window.volver = volver;