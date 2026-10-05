/* =====================================
   BREAQ - NOTIFICACIÓN JS

   Sistema de avisos progresivos

===================================== */





// Tiempo conectado guardado

let tiempo = localStorage.getItem(

"tiempoConexion"

);




// Número de veces que aplazó

let contadorAvisos = Number(

localStorage.getItem(

"contadorAvisos"

)

) || 0;







mostrarAviso();









function mostrarAviso(){



let titulo = document.getElementById(

"titulo"

);



let mensaje = document.getElementById(

"mensaje"

);



let mascota = document.getElementById(

"mascotaAviso"

);



document.getElementById(

"espera"

).textContent = "";







// ===============================
// PRIMER AVISO
// ===============================


if(contadorAvisos === 0){



mascota.src =

"../imagenes/mascota_sonriente.png";



titulo.textContent =

"Es momento de una pausa";



mensaje.innerHTML =


"Llevas un tiempo conectado.<br><br>"
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

"Está bien, puedes continuar";



mensaje.innerHTML =


"Recuerda que llevas <strong>"
+
tiempo
+
"</strong> conectado.<br><br>"
+
"Cuando quieras, aquí estaré para acompañarte.";



}









// ===============================
// TERCER AVISO
// ===============================


else{



mascota.src =

"../imagenes/mascota_enojada.png";



titulo.textContent =

"Tu bienestar también importa";



mensaje.innerHTML =


"Has estado conectado durante <strong>"
+
tiempo
+
"</strong>.<br><br>"
+
"Quizá sea un buen momento para respirar.";



}



}









// =====================================
// TOMAR PAUSA
// MENSAJE POSITIVO
// =====================================


function tomarPausa(){



// Reiniciar ciclo de avisos


localStorage.setItem(

"contadorAvisos",

0

);






document.querySelector(

".notificacion"

).innerHTML = `



<img

src="../imagenes/mascota_sonriente.png"

class="mascota"

alt="BREAQ feliz"

>





<h1>

BREAQ

</h1>





<h2>

¡Excelente!

</h2>






<p>

Disfruta tu tiempo en familia.<br><br>

Tu descanso también es importante.

</p>



`;







// 5 minutos reales
// Para presentación usar 10000



setTimeout(function(){



window.location.href =

"../pausa/pausa.html";



},300000);



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

"BREAQ volverá a recordártelo en unos segundos...";






setTimeout(function(){



mostrarAviso();



},10000);



}