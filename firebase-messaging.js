/* =====================================
   BREAQ - FIREBASE NOTIFICATIONS
===================================== */


import { messaging }

from "./firebase-config.js";



import { getToken }

from "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging.js";





const vapidKey =

"BBxnlmJSagngSmj_OKQlBPEF6NwkJIEAyo-j6dKV8ZqIF6PWA3_x0a8scDeYoUAVyWCiW5Qrlm74rbY8VluuoSw";









// =====================================
// ACTIVAR NOTIFICACIONES
// =====================================


export async function activarNotificaciones(){


console.log("Firebase iniciado");



try{





// Registrar Service Worker


const registration = await navigator.serviceWorker.register(

"/Breaq/firebase-messaging-sw.js"

);




console.log(

"Service Worker registrado:",

registration

);









// Pedir permiso


const permiso = await Notification.requestPermission();





console.log(

"Permiso:",
permiso

);







if(permiso !== "granted"){


console.log(

"Permiso rechazado"

);


return;


}









// Obtener token


console.log(

"Solicitando token..."

);





const token = await getToken(

messaging,

{

vapidKey:vapidKey,

serviceWorkerRegistration: registration

}

);










console.log(

"PASO TOKEN"

);







if(token){



console.log(

"Token BREAQ:",

token

);




localStorage.setItem(

"tokenBREAQ",

token

);



}

else{


console.log(

"No se pudo generar token"

);



}







}

catch(error){



console.error(

"Error activando notificaciones:",

error

);



}



}