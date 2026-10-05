/* =====================================
   BREAQ SERVICE WORKER

   Permite que BREAQ funcione
   como aplicación instalada

===================================== */


const CACHE_NAME = "breaq-v2";




const archivos = [


"./",



// PORTADA

"portada/index.html",

"portada/portada.css",

"portada/portada.js",




// DASHBOARD

"dashboard/dashboard.html",

"dashboard/dashboard.css",

"dashboard/dashboard.js",




// ACOMPAÑAMIENTO

"acompanamiento/acompanamiento.html",

"acompanamiento/acompanamiento.css",

"acompanamiento/acompanamiento.js",




// NOTIFICACIÓN

"notificacion/notificacion.html",

"notificacion/notificacion.css",

"notificacion/notificacion.js",




// PAUSA

"pausa/pausa.html",

"pausa/pausa.css",

"pausa/pausa.js",




// CONFIGURACIÓN

"manifest.json"


];









// =====================================
// INSTALAR APP
// =====================================


self.addEventListener(

"install",

evento => {


evento.waitUntil(


caches.open(CACHE_NAME)

.then(cache => {


return cache.addAll(archivos);


})


);



}

);









// =====================================
// CARGAR ARCHIVOS
// =====================================


self.addEventListener(

"fetch",

evento => {


evento.respondWith(


caches.match(evento.request)

.then(respuesta => {


return respuesta || fetch(evento.request);


})


);



}

);
