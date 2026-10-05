/* =====================================
   BREAQ - NOTIFICACIÓN JS

   Sistema de avisos progresivos
   + Reinicio de ciclo
===================================== */



let contadorAvisos = Number(

localStorage.getItem(

"contadorAvisos"

)

) || 0;






mostrarAviso();









// =====================================
// MOSTRAR AVISO
// =====================================


function mostrarAviso(){



let titulo = document.getElementById("titulo");

let mensaje = document.getElementById("mensaje");

let mascota = document.getElementById("mascotaAviso");

let espera = document.getElementById("espera");





if(espera){

espera.textContent = "";

}





let duracion = localStorage.getItem(
"duracionAcompanamiento"
) || 0;






// ===============================
// PRIMER AVISO
// ===============================


if(contadorAvisos === 0){



mascota.src =

"../imagenes/mascota_sonriente.png";




titulo.textContent =

"Tu momento de pausa llegó";





mensaje.innerHTML =


"Llevas <strong>"
+
duracion
+
" minutos</strong> acompañado.<br><br>"
+
"Tu mente también necesita descansar.";





}







// ===============================
// SEGUNDO AVISO
// ===============================


else if(contadorAvisos === 1){



mascota.src =

"../imagenes/mascota_colmillos.png";




titulo.textContent =

"Puedes continuar un poco más";





mensaje.innerHTML =


"Recuerda cuidar tu bienestar.<br><br>"
+
"Breaq seguirá aquí para acompañarte.";





}







// ===============================
// TERCER AVISO
// ===============================


else{



mascota.src =

"../imagenes/mascota_enojada.png";




titulo.textContent =

"Tu bienestar importa";





mensaje.innerHTML =


"Quizá este sea un buen momento para respirar.";





}



}











// =====================================
// LIMPIAR CICLO
// =====================================


function limpiarCiclo(){



localStorage.removeItem(

"inicioAcompanamiento"

);



localStorage.removeItem(

"duracionAcompanamiento"

);



localStorage.removeItem(

"acompanamientoActivo"

);



localStorage.removeItem(

"tiempoConexion"

);



}












// =====================================
// TOMAR PAUSA
// =====================================


function tomarPausa(){



localStorage.setItem(

"contadorAvisos",

0

);





limpiarCiclo();






document.querySelector(

".notificacion"

).innerHTML = `



<img

src="../imagenes/mascota_sonriente.png"

class="mascota"

alt="BREAQ"

>




<h1>

BREAQ

</h1>




<h2>

¡Excelente!

</h2>




<p>

Disfruta tu tiempo de descanso.<br><br>

Tu bienestar también es importante.

</p>





<button

class="volverInicio"

onclick="volverInicio()"

>

Volver al inicio

</button>



`;



}












// =====================================
// DESPUÉS
// =====================================


function despues(){



contadorAvisos++;





localStorage.setItem(

"contadorAvisos",

contadorAvisos

);





document.getElementById(

"espera"

).textContent =

"BREAQ volverá a acompañarte pronto...";






// Demo 1 minuto

setTimeout(function(){



limpiarCiclo();



window.location.href =

"../dashboard/dashboard.html";



},60000);



}











// =====================================
// VOLVER AL INICIO
// =====================================


function volverInicio(){



limpiarCiclo();




window.location.href =

"../dashboard/dashboard.html";



}











// CONECTAR BOTONES HTML


window.tomarPausa = tomarPausa;

window.despues = despues;

window.volverInicio = volverInicio;