/* =====================================
   BREAQ - PERFIL JS

   Controla:
   - Selección de opciones
   - Validación nombre
   - Guardado usuario

===================================== */





// =====================================
// SELECCIONAR OPCIONES
// =====================================


function seleccionar(elemento){



    let hermanos = elemento.parentElement.children;



    for(let boton of hermanos){

        boton.classList.remove(
            "seleccionado"
        );

    }



    elemento.classList.add(
        "seleccionado"
    );


}









// =====================================
// GUARDAR PERFIL
// =====================================


function guardarPerfil(){



    let nombre =
    document.getElementById("nombre").value;



    let campo =
    document.getElementById("nombre");



    let mensaje =
    document.getElementById("errorNombre");





    if(nombre.trim() === ""){


        campo.classList.add(
            "input-error"
        );


        mensaje.style.display="block";


        return;


    }







    localStorage.setItem(

        "nombreUsuario",

        nombre

    );





    window.location.href =

    "../dashboard/dashboard.html";



}









// =====================================
// QUITAR ERROR AL ESCRIBIR
// =====================================


function quitarErrorNombre(){



    let campo =
    document.getElementById("nombre");



    let mensaje =
    document.getElementById("errorNombre");




    campo.classList.remove(

        "input-error"

    );



    mensaje.style.display="none";



}