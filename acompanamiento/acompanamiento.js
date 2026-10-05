/* =====================================
   BREAQ - ACOMPAÑAMIENTO JS

   Control del acompañamiento:
   - Activa seguimiento
   - Cuenta tiempo
   - Envía avisos
===================================== */


let activo = false;

let segundos = 0;

let intervalo;


// Tiempo demo para presentación

const limiteAviso = 10;




function activarAcompanamiento(){



if(!activo){



activo = true;



localStorage.setItem(
"acompanamientoActivo",
"true"
);




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



segundos = 0;



intervalo = setInterval(
actualizarTiempo,
1000
);



}

else{


desactivar();


}


}







function actualizarTiempo(){


segundos++;




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





// Guardar tiempo actual

localStorage.setItem(
"tiempoConexion",
tiempo
);






if(segundos >= limiteAviso){


clearInterval(intervalo);



window.location.href =
"../notificacion/notificacion.html";


}



}









function desactivar(){



activo=false;


clearInterval(intervalo);



localStorage.removeItem(
"acompanamientoActivo"
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








function volver(){


window.location.href =
"../dashboard/dashboard.html";


}