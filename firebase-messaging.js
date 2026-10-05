/* =====================================
   BREAQ - FIREBASE NOTIFICATIONS
===================================== */


import { messaging }

from "./firebase-config.js";



import { getToken }

from "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging.js";





const vapidKey =

"BBxnlmJSagngSmj_OKQlBPEF6NwkJIEAyo-j6dKV8ZqIF6PWA3_x0a8scDeYoUAVyWCiW5Qrlm74rbY8VluuoSw";







export async function activarNotificaciones(){



try{


const permiso =

await Notification.requestPermission();





if(permiso !== "granted"){



console.log(
"Permiso no aceptado"
);


return;


}






const token = await getToken(

messaging,

{

vapidKey:vapidKey

}

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





}

catch(error){


console.error(
"Error Firebase:",
error
);


}



}