//Acceder al boton para abrir el modal
let modal=document.getElementById("abrirModal");

//Acceder a la ventana modal
let ventana=document.getElementById("ventanaModal");

//Acceder al boton modal  a la ventana 
let cerrar=document.querySelector(".cerrarModal");

modal.addEventListener("click", ()=>{
    ventana.style.display="block";
})

cerrar.addEventListener("click", ()=>{
    ventana.style.display="none";
})

window.addEventListener("click",(e)=>{
    if (e.target==ventana) {
        ventana.style.display="none";
    }


})
