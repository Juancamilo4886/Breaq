/* =====================================
   BREAQ - MODOS JS

   Controla la selección
   del modo elegido

===================================== */



/* =====================================
   BREAQ - MODOS JS

   Guarda el modo elegido
   y pasa al perfil

===================================== */


let modoElegido = "";




function seleccionarModo(modo){


    modoElegido = modo;



    localStorage.setItem(
        "modoBREAQ",
        modoElegido
    );



    console.log(
        "Modo elegido:",
        modoElegido
    );



    // Ir a perfil después de elegir

    setTimeout(()=>{


        window.location.href="../perfil/perfil.html";


    },300);



}