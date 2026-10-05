/* =====================================
   BREAQ - ACOMPAÑAMIENTO JS

   Funciones:
   - Control de acompañamiento
   - Contador persistente
   - Firebase Notifications
   - Estado guardado
===================================== */



import { activarNotificaciones }

from "../firebase-messaging.js";





let activo = false;

let intervalo = null;



// Tiempo demo para presentación

const limiteAviso = 10;







// =====================================
// CARGAR ESTADO AL ENTRAR
// =====================================


window.onload = function(){



let estado = localStorage.getItem(
"acompanamientoActivo"
);





if(estado === "true"){



activo = true;



activarInterfaz();



actualizarTiempo();



intervalo = setInterval(

actualizarTiempo,

1000

);



}



};









// =====================================
// BOTÓN PRINCIPAL
// =====================================


function activarAcompanamiento(){





if(!activo){





activo = true;





localStorage.setItem(

"acompanamientoActivo",

"true"

);






// Guardar inicio solamente una vez



if(!localStorage.getItem(

"inicioAcompanamiento"

)){



localStorage.setItem(

"inicioAcompanamiento",

Date.now()

);



}







// Activar Firebase



activarNotificaciones();






activarInterfaz();




actualizarTiempo();





intervalo = setInterval(

actualizarTiempo,

1000

);






}



else{



desactivar();



}



}









// =====================================
// INTERFAZ ACTIVA
// =====================================


function activarInterfaz(){



document.getElementById(

"punto"

).textContent = "●";





document.getElementById(

"textoEstado"

).textContent = "Activo";





document.getElementById(

"botonAccion"

).textContent =

"Desactivar acompañamiento";



}









// =====================================
// CONTADOR REAL
// =====================================


function actualizarTiempo(){



let inicio = Number(

localStorage.getItem(

"inicioAcompanamiento"

)

);





if(!inicio){

return;

}






let diferencia =

Date.now() - inicio;






let segundos = Math.floor(

diferencia / 1000

);






let minutos = Math.floor(

segundos / 60

);






let segundosActuales =

segundos % 60;







let tiempo =



(minutos < 10 ? "0":"")
+
minutos
+
":"
+
(segundosActuales < 10 ? "0":"")
+
segundosActuales;







let contador = document.getElementById(

"contador"

);






if(contador){


contador.textContent = tiempo;


}







localStorage.setItem(

"tiempoConexion",

tiempo

);







// Aviso demo

if(segundos >= limiteAviso){



clearInterval(intervalo);





window.location.href =

"../notificacion/notificacion.html";



}



}









// =====================================
// DESACTIVAR
// =====================================


function desactivar(){



activo = false;





clearInterval(intervalo);






localStorage.removeItem(

"acompanamientoActivo"

);





localStorage.removeItem(

"inicioAcompanamiento"

);






document.getElementById(

"punto"

).textContent = "○";





document.getElementById(

"textoEstado"

).textContent = "Inactivo";






document.getElementById(

"botonAccion"

).textContent =

"Activar acompañamiento";



}









// =====================================
// VOLVER
// =====================================


function volver(){



window.location.href =

"../dashboard/dashboard.html";



}