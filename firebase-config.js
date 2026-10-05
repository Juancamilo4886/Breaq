/* =====================================
   BREAQ - FIREBASE CONFIG
===================================== */


import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";


import { getMessaging }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging.js";



const firebaseConfig = {


apiKey: "AIzaSyAK2-S4ZFuvgFgFzSIZgGnIzh3Cbd3yaXw",


authDomain: "breaq-d1b9a.firebaseapp.com",


projectId: "breaq-d1b9a",


storageBucket: "breaq-d1b9a.firebasestorage.app",


messagingSenderId: "549268274033",


appId: "1:549268274033:web:50ce62ed0af8af5469d4d0"


};





const app = initializeApp(firebaseConfig);



export const messaging = getMessaging(app);