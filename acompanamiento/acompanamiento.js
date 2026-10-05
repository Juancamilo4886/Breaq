/* =====================================
   BREAQ - ACOMPAÑAMIENTO JS

   Nueva versión:
   - Guarda inicio real
   - No se reinicia al salir
   - Recupera tiempo al volver
   - Mantiene estado activo
===================================== */


let activo = false;

let intervalo;


// Tiempo demo presentación

const limiteAviso = 10;





// =====================================
// AL CARGAR LA PÁGINA
// =====================================


window.onload = function(){


let estado = localStorage.getItem(
"acompanamientoActivo"
);



if(estado === "true"){



activo = true;



document.getElementById(
"punto"
).textContent="●";



document.getElementById(
"textoEstado"
).textContent="Activo";



document.getElementById(
"botonAccion"
).textContent=
"Desactivar acompañamiento";



actualizarTiempo();



intervalo = setInterval(
actualizarTiempo,
1000
);



}



};









// =====================================
// ACTIVAR ACOMPAÑAMIENTO
// =====================================


function activarAcompanamiento(){



if(!activo){



activo = true;





localStorage.setItem(

"acompanamientoActivo",

"true"

);





// Guardar inicio solamente la primera vez


if(!localStorage.getItem(
"inicioAcompanamiento"
)){


localStorage.setItem(

"inicioAcompanamiento",

Date.now()

);


}







document.getElementById(
"punto"
).textContent="●";




document.getElementById(
"textoEstado"
).textContent="Activo";




document.getElementById(
"botonAccion"
).textContent=
"Desactivar acompañamiento";





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
// ACTUALIZAR TIEMPO REAL
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






let diferencia = Date.now() - inicio;





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







document.getElementById(

"contador"

).textContent = tiempo;







localStorage.setItem(

"tiempoConexion",

tiempo

);







// Aviso demo


if(segundos >= limiteAviso){



window.location.href =

"../notificacion/notificacion.html";



}



}









// =====================================
// DESACTIVAR
// =====================================


function desactivar(){



activo=false;



clearInterval(intervalo);





localStorage.removeItem(

"acompanamientoActivo"

);




localStorage.removeItem(

"inicioAcompanamiento"

);







document.getElementById(
"punto"
).textContent="○";




document.getElementById(
"textoEstado"
).textContent="Inactivo";




document.getElementById(
"botonAccion"
).textContent=
"Activar acompañamiento";



}









// =====================================
// VOLVER
// =====================================


function volver(){


window.location.href =

"../dashboard/dashboard.html";


}
