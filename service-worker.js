/* =====================================
   BREAQ SERVICE WORKER

   - PWA
   - Cache
   - Preparado para Push Notifications
===================================== */



const CACHE_NAME = "breaq-v2";





const archivos = [


"./",



"portada/index.html",

"portada/portada.css",

"portada/portada.js",



"dashboard/dashboard.html",

"dashboard/dashboard.css",

"dashboard/dashboard.js",



"acompanamiento/acompanamiento.html",

"acompanamiento/acompanamiento.css",

"acompanamiento/acompanamiento.js",



"notificacion/notificacion.html",

"notificacion/notificacion.css",

"notificacion/notificacion.js",



"pausa/pausa.html",

"pausa/pausa.css",

"pausa/pausa.js",



"manifest.json"


];







// =====================================
// INSTALAR
// =====================================


self.addEventListener(

"install",

evento => {


evento.waitUntil(


caches.open(CACHE_NAME)

.then(cache=>{


return cache.addAll(archivos);


})


);



}

);









// =====================================
// ACTIVAR
// =====================================


self.addEventListener(

"activate",

evento=>{


evento.waitUntil(

caches.keys()

.then(keys=>{


return Promise.all(

keys.map(key=>{


if(key !== CACHE_NAME){


return caches.delete(key);


}


})


);


})


);


}

);









// =====================================
// CARGAR ARCHIVOS
// =====================================


self.addEventListener(

"fetch",

evento=>{


evento.respondWith(


caches.match(evento.request)

.then(respuesta=>{


return respuesta || fetch(evento.request);


})


);



}

);









// =====================================
// FUTURAS NOTIFICACIONES PUSH
// =====================================


self.addEventListener(

"push",

evento=>{



let datos = {


titulo:"BREAQ",

mensaje:"Recuerda tomar una pausa"

};





if(evento.data){


datos = evento.data.json();


}





evento.waitUntil(



self.registration.showNotification(

datos.titulo,

{

body:datos.mensaje,

icon:"imagenes/icono_breaq.png"


}



)



);



});
