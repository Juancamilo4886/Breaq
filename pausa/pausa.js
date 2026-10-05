/* =====================================
   BREAQ - PAUSA JS

   Respiración guiada

===================================== */



let estados = [

"Inhala",

"Respira",

"Exhala",

"Descansa"

];



let contador = 0;






setInterval(function(){



document.getElementById(

"textoRespira"

).textContent =

estados[contador];




contador++;



if(contador >= estados.length){

contador=0;

}



},2000);








function terminarPausa(){


window.location.href =

"../dashboard/dashboard.html";


}