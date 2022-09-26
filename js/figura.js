//Acceder al boton para abrir el modal
let modal=document.getElementById("abrirModalC");

//Acceder a la ventana modal
let ventana=document.getElementById("ventanaModal");
let ventana5=document.getElementById("ventanaModal5");

//Acceder al boton modal  a la ventana 
let cerrar=document.querySelector(".cerrarModal");

modal.addEventListener("click", ()=>{
    ventana.style.display="block";
});
cerrar.addEventListener("click", ()=>{
    ventana.style.display="none";
});
window.addEventListener("click",(e)=>{
    if (e.target==ventana) {
        ventana.style.display="none";
    }
})

//Perimetro de un cuadrado
modalcp.addEventListener("click",()=>{
    ventana.style.display="block";
    let res=num1*4;
    let texto=`<p>El Perimetro del cuadrado es ${res} <i class="fa-solid fa-circle-check"></i></p>`
    rta.innerHTML=texto

})


//Area cuadrado
modalcp.addEventListener("click",()=>{
    ventana.style.display="block";
    let res=num1*num1;
    let texto=`<p>El área del cuadrado es ${res} <i class="fa-solid fa-circle-check"></i></p>`
    rta.innerHTML=texto

})


//Perimetro rectangulo
const op=document.getElementById("ops");
const rta=document.getElementById("respuesta")
ops.addEventListener('click',(e)=>{
    e.preventDefault()

    let num1=parseInt(document.getElementById("num1").value);

    if (e.target.id=="btnar") {
        let res=(3.1416)*(num1*num1);
        let texto=`<p>El perimetro es ${res.toFixed(2)} <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto
    }
  
})
//Area del rectangulo


//Perimetro circulo
modalpc.addEventListener("click", ()=>{
    ventana5.style.display="block";
});
cerrar.addEventListener("click", ()=>{
    ventana5.style.display="none";
});
window.addEventListener("click",(e)=>{
    if (e.target==ventana5) {
        ventana5.style.display="none";
    }
})

modalpc.addEventListener("click",()=>{
    ventana5.style.display="block";
});

let res=num1*3.1416;
let texto=`<p>El Perimetro del circulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`
rta.innerHTML=texto
//Area de un circulo
const ops=document.getElementById("sumabtn");
const rta=document.getElementById("respuesta")
ops.addEventListener('click',(e)=>{
    e.preventDefault()
    let num1=parseInt(document.getElementById("num1").value);
    let res=(3.1416)*(num1*num1);
    let texto=`<p>El área es ${res.toFixed(2)} <i class="fa-solid fa-circle-check"></i></p>`
    rta.innerHTML=texto
})
