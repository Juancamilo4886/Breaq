/* =====================================
   BREAQ - DASHBOARD JS

   Funciones:
   - Cargar nombre
   - Estados emocionales
   - Navegación

===================================== */





// =====================================
// CARGAR NOMBRE
// =====================================


let nombre = localStorage.getItem(

"nombreUsuario"

);




if(nombre){


document.getElementById(

"nombreUsuario"

).textContent = nombre;


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