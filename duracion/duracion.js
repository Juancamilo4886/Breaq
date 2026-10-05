/* =====================================
   BREAQ - DURACIÓN JS

   - Selección de tiempo
   - Inicio acompañamiento
   - Firebase Notifications
===================================== */








// PRUEBA DE CARGA

alert("Duracion JS cargado");







let tiempo = 1;









// =====================================
// CAMBIAR TIEMPO
// =====================================


function cambiarTiempo(direccion){





if(direccion === 1){



if(tiempo === 1){


tiempo = 5;


}

else{


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








let texto = document.getElementById(

"minutos"

);



if(texto){


texto.textContent = tiempo;


}



}











// =====================================
// INICIAR ACOMPAÑAMIENTO
// =====================================


async function iniciarAcompanamiento(){



alert(

"Entró al botón comenzar"

);







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










// Firebase


await activarNotificaciones();






alert(

"Firebase ejecutado"

);







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
