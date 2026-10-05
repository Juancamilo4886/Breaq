/* =====================================
   BREAQ - ACOMPAÑAMIENTO JS

   Funciones:
   - Cuenta duración elegida
   - Mantiene sesión activa
   - Envía a notificación
===================================== */


let intervalo = null;




// =====================================
// CARGAR ACOMPAÑAMIENTO
// =====================================


window.onload = function(){


actualizarInterfaz();


intervalo = setInterval(

actualizarTiempo,

1000

);


};








// =====================================
// INTERFAZ ACTIVA
// =====================================


function actualizarInterfaz(){


let punto = document.getElementById("punto");

let texto = document.getElementById("textoEstado");

let boton = document.getElementById("botonAccion");



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





// minutos elegidos por usuario

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


(minutosMostrar < 10 ? "0":"")
+
minutosMostrar
+
":"
+
(segundosMostrar < 10 ? "0":"")
+
segundosMostrar;







let contador = document.getElementById(

"contador"

);




if(contador){

contador.textContent = tiempo;

}







// FINAL DEL ACOMPAÑAMIENTO


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









// CONECTAR CON HTML


window.finalizar = finalizar;

window.volver = volver;