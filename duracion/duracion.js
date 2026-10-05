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



// Si está en 1 pasa a 5

if(tiempo === 1){

tiempo = 5;

}

else{

tiempo += 5;

}



}







if(direccion === -1){



// Si está en 5 vuelve a 1

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
// INICIAR
// =====================================


function iniciarAcompanamiento(){





localStorage.setItem(

"duracionAcompanamiento",

tiempo

);






localStorage.setItem(

"inicioAcompanamiento",

Date.now()

);






localStorage.setItem(

"acompanamientoActivo",

"true"

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
// CONEXIÓN BOTONES HTML
// =====================================


window.cambiarTiempo = cambiarTiempo;

window.iniciarAcompanamiento = iniciarAcompanamiento;

window.volver = volver;