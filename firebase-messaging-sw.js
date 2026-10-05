/* =====================================
   BREAQ FIREBASE SERVICE WORKER
===================================== */


importScripts(

"https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"

);


importScripts(

"https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js"

);






firebase.initializeApp({


apiKey: "AIzaSyAK2-S4ZFuvgFgFzSIZgGnIzh3Cbd3yaXw",


authDomain: "breaq-d1b9a.firebaseapp.com",


projectId: "breaq-d1b9a",


storageBucket: "breaq-d1b9a.firebasestorage.app",


messagingSenderId: "549268274033",


appId: "1:549268274033:web:50ce62ed0af8af5469d4d0"



});







const messaging = firebase.messaging();





messaging.onBackgroundMessage(

function(payload){



console.log(

"Mensaje recibido:",

payload

);







const titulo =

payload.notification.title || "BREAQ";







const opciones = {


body:

payload.notification.body || 
"Recuerda tomar una pausa 🐰",


icon:

"imagenes/icono_breaq.png"



};







self.registration.showNotification(

titulo,

opciones

);



}

);