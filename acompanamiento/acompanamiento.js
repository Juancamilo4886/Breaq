/* =====================================
   BREAQ - ACOMPAÑAMIENTO JS

   Funciones:
   - Cuenta duración elegida
   - Mantiene sesión activa
   - Detecta regreso de la app
===================================== */


let intervalo = null;






// =====================================
// CARGAR ACOMPAÑAMIENTO
// =====================================


window.onload = function(){



let inicioGuardado = localStorage.getItem(
"inicioAcompanamiento"
);



let duracionGuardada = localStorage.getItem(
"duracionAcompanamiento"
);



actualizarInterfaz();


actualizarTiempo();





intervalo = setInterval(

actualizarTiempo,

1000

);



};












// =====================================
// DETECTAR CUANDO VUELVE A LA APP
// =====================================


document.addEventListener(

"visibilitychange",

function(){



if(document.visibilityState === "visible"){



actualizarTiempo();



}



}

);












// =====================================
// INTERFAZ ACTIVA
// =====================================


function actualizarInterfaz(){



let punto = document.getElementById(

"punto"

);



let texto = document.getElementById(

"textoEstado"

);



let boton = document.getElementById(

"botonAccion"

);





if(punto){



punto.textContent = "●";



}





if(texto){



texto.textContent = "Activo";



}





if(boton){



boton.textContent = "Finalizar acompañamiento";



}



}












// =====================================
// CONTADOR PRINCIPAL
// =====================================


function actualizarTiempo(){



let inicio = Number(

localStorage.getItem(

"inicioAcompanamiento"

)

);






let duracion = Number(

localStorage.getItem(

"duracionAcompanamiento"

)

);







if(!inicio || !duracion){



return;



}









let limite = duracion * 60;







let diferencia = Date.now() - inicio;







let segundos = Math.floor(

diferencia / 1000

);







let minutosMostrar = Math.floor(

segundos / 60

);







let segundosMostrar = segundos % 60;








let tiempo =


(minutosMostrar < 10 ? "0" : "")
+
minutosMostrar
+
":"
+
(segundosMostrar < 10 ? "0" : "")
+
segundosMostrar;







let contador = document.getElementById(

"contador"

);






if(contador){



contador.textContent = tiempo;



}












// FINAL DEL TIEMPO


if(segundos >= limite){



clearInterval(intervalo);





localStorage.setItem(

"acompanamientoTerminado",

"true"

);






window.location.href =

"../notificacion/notificacion.html";



}



}













// =====================================
// FINALIZAR MANUALMENTE
// =====================================


function finalizar(){



clearInterval(intervalo);






localStorage.removeItem(

"acompanamientoActivo"

);



localStorage.removeItem(

"inicioAcompanamiento"

);



localStorage.removeItem(

"duracionAcompanamiento"

);



localStorage.removeItem(

"tiempoConexion"

);







window.location.href =

"../dashboard/dashboard.html";



}











// =====================================
// VOLVER
// =====================================


function volver(){



window.location.href =

"../dashboard/dashboard.html";



}











// =====================================
// CONECTAR HTML
// =====================================


window.finalizar = finalizar;

window.volver = volver;
