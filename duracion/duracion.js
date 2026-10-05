/* =====================================
   BREAQ - DURACIÓN JS

   - Selección de tiempo
   - Inicio acompañamiento
   - Firebase Notifications
===================================== */



import { activarNotificaciones }

from "../firebase-messaging.js";







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







document.getElementById(

"minutos"

).textContent = tiempo;



}











// =====================================
// INICIAR ACOMPAÑAMIENTO
// =====================================


async function iniciarAcompanamiento(){



alert(

"Entró a iniciar acompañamiento"

);






// Guardar duración


localStorage.setItem(

"duracionAcompanamiento",

tiempo

);








// Guardar inicio


localStorage.setItem(

"inicioAcompanamiento",

Date.now()

);








// Estado activo


localStorage.setItem(

"acompanamientoActivo",

"true"

);








// Activar Firebase


await activarNotificaciones();







alert(

"Firebase terminó"

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
// CONECTAR BOTONES HTML
// =====================================


window.cambiarTiempo = cambiarTiempo;


window.iniciarAcompanamiento = iniciarAcompanamiento;


window.volver = volver;
