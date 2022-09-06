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

const ops=document.getElementById("ops");
const rta=document.getElementById("respuesta")
ops.addEventListener('click',(e)=>{
    e.preventDefault()

    let num1=parseInt(document.getElementById("num1").value);

    if (e.target.id=="sumabtn") {
        let res=(3.1416)*(num1*num1);
        let texto=`<p>El área es ${res} <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto
    }
})
