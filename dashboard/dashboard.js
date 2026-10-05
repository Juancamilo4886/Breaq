/* =====================================
   BREAQ - DASHBOARD JS

   Funciones:
   - Cargar nombre
   - Estados emocionales
   - Recuperar acompañamiento activo
   - Navegación

===================================== */






// =====================================
// RECUPERAR ACOMPAÑAMIENTO ACTIVO
// =====================================


window.addEventListener(

"load",

function(){



let activo = localStorage.getItem(

"acompanamientoActivo"

);





let inicio = localStorage.getItem(

"inicioAcompanamiento"

);





let duracion = localStorage.getItem(

"duracionAcompanamiento"

);







if(

activo === "true"

&&

inicio

&&

duracion

){





window.location.href =

"../acompanamiento/acompanamiento.html";





}



}

);









// =====================================
// CARGAR NOMBRE
// =====================================


let nombre = localStorage.getItem(

"nombreUsuario"

);






if(nombre){



let elementoNombre = document.getElementById(

"nombreUsuario"

);





if(elementoNombre){



elementoNombre.textContent = nombre;



}



}












// =====================================
// ESTADO EMOCIONAL
// =====================================


function seleccionarEstado(boton){





let botones = document.querySelectorAll(

".emociones button"

);






botones.forEach(function(item){



item.classList.remove(

"activo"

);



});







boton.classList.add(

"activo"

);





}













// =====================================
// IR A ACOMPAÑAMIENTO
// =====================================


function irAcompanamiento(){



window.location.href =

"../duracion/duracion.html";



}











// =====================================
// IR A PROCESO
// =====================================


function irProceso(){



window.location.href =

"../proceso/proceso.html";



}











// =====================================
// CONECTAR HTML
// =====================================


window.irAcompanamiento = irAcompanamiento;

window.irProceso = irProceso;

window.seleccionarEstado = seleccionarEstado;
