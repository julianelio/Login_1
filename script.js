//Guardamos el boton de Html en una variable de Js
let boton = document.querySelector("#login-button");
//Imprimimos el contenido de la variable
console.log(boton);
//relacionamos el boton con la funcion
boton.setAttribute("onclick","validarUsuario()")


//Esta es la funcion para validar el usuario y contraseña
 function validarUsuario(){
     console.log("Estamos adentro de la funcion");
     //Este es el usuario registrado
     const USUARIO_REGISTRADO = "pedro";
     const CLAVE_REGISTRADO = "1234";
 
     //Estos son los datos ingresados en el formulario

     let miUsuario = document.querySelector("#user").value;
     let miClave = document.querySelector("#pass").value;

     if (USUARIO_REGISTRADO == miUsuario && CLAVE_REGISTRADO == miClave) {
        console.log("Ingresaste"); 
        document.querySelector("#contenedor").className += " form-success";
        document.querySelector("form").style.display = "none";
     } else {
         console.log("No ingresaste");
     }
    }