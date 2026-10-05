/* =====================================
   BREAQ - DASHBOARD JS

   Funciones:
   - Cargar nombre
   - Estados emocionales
   - Recuperar acompañamiento
   - Navegación

===================================== */





// =====================================
// RECUPERAR ACOMPAÑAMIENTO ACTIVO
// =====================================


window.addEventListener(

"load",

function(){



let inicio = localStorage.getItem(

"inicioAcompanamiento"

);



let duracion = localStorage.getItem(

"duracionAcompanamiento"

);





if(inicio && duracion){



let diferencia = Date.now() - Number(inicio);



let segundos = Math.floor(

diferencia / 1000

);



let limite = Number(duracion) * 60;





if(segundos < limite){



window.location.href =

"../acompanamiento/acompanamiento.html";



}



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



let elemento = document.getElementById(

"nombreUsuario"

);



if(elemento){



elemento.textContent = nombre;



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
// CONECTAR CON HTML
// =====================================


window.irAcompanamiento = irAcompanamiento;


window.irProceso = irProceso;


window.seleccionarEstado = seleccionarEstado;