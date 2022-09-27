//Perimetro de un cuadrado
let percua=document.getElementById("abrirModalpc");
let ventana=document.getElementById("ventanaModal");
let cerrar=document.querySelector(".cerrarModal");

percua.addEventListener("click", ()=>{
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
    const perimetro=document.getElementById("percu");
    const rta=document.getElementById("rta");
    perimetro.addEventListener('click',(e)=>{
    e.preventDefault();
    let num=parseInt(document.getElementById("num1").value);
    let res=4*num;
    let texto=`<p>El perimetro del cuadrado es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rta.innerHTML=texto
   })

//Area de un cuadrado
let areacua=document.getElementById("abrirModalac");
let ventanar=document.getElementById("ventanaModal2");
let cerrara=document.querySelector(".cerrarModal2");

areacua.addEventListener("click", ()=>{
    ventanar.style.display="block";
})

cerrara.addEventListener("click", ()=>{
    ventanar.style.display="none";
})

window.addEventListener("click",(e)=>{
    if (e.target==ventanar) {
        ventanar.style.display="none";
    }
})
    const area=document.getElementById("arecu");
    const rta2=document.getElementById("rta2");
    area.addEventListener('click',(e)=>{
    e.preventDefault();
    let num=parseInt(document.getElementById("num").value);
    let res=num*num;
    let texto=`<p>El area del cuadrado es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rta2.innerHTML=texto
   })


//PERIMETRO DE UN RECTANGULO
let perec=document.getElementById("abrirModalpr");
let ventanarec=document.getElementById("ventanaModal3");
let cerrarr=document.querySelector(".cerrarModal");

perec.addEventListener("click", ()=>{
    ventanarec.style.display="block";
})

cerrarr.addEventListener("click", ()=>{
    ventanarec.style.display="none";
})

window.addEventListener("click",(e)=>{
    if (e.target==ventanarec) {
        ventanarec.style.display="none";
    }
})
    const perimetrorec=document.getElementById("perir");
    const rtarec=document.getElementById("rta3");
    perimetrorec.addEventListener('click',(e)=>{
    e.preventDefault();
    let ba=parseInt(document.getElementById("numr").value);
    let al=parseInt(document.getElementById("numr2").value);
    let rese=ba+al+ba+al;
    let texto=`<p>El perimetro del Rectangulo es ${rese} <i class="fa-solid fa-circle-check"></i></p>`;
    rtarec.innerHTML=texto
   })

//Area de un rectangulo
let ararec=document.getElementById("abrirAreaR");
let ventanarea=document.getElementById("ventanaModal4");
let cerrare=document.querySelector(".cerrarModal");

ararec.addEventListener("click", ()=>{
    ventanarea.style.display="block";
})

cerrare.addEventListener("click", ()=>{
    ventanarea.style.display="none";
})

window.addEventListener("click",(e)=>{
    if (e.target==ventanarea) {
        ventanarea.style.display="none";
    }
})
    const arearec=document.getElementById("arer");
    const rtare=document.getElementById("rta4");
    arearec.addEventListener('click',(e)=>{
    e.preventDefault();
    let ba=parseInt(document.getElementById("ba").value);
    let al=parseInt(document.getElementById("al").value);
    let res=ba*al;
    let texto=`<p>El area del Rectangulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rtare.innerHTML=texto
   })

//Perimetro Triangulo
let peritri=document.getElementById("abrirModalpt");
let ventanpt=document.getElementById("ventanaModal5");
let cerrpt=document.querySelector(".cerrarModal5");

peritri.addEventListener("click", ()=>{
    ventanpt.style.display="block";
})
cerrpt.addEventListener("click", ()=>{
    ventanpt.style.display="none";
})
window.addEventListener("click",(e)=>{
    if (e.target==ventanpt) {
        ventanpt.style.display="none";
    }
})
    const peritr=document.getElementById("perTri");
    const rtapt=document.getElementById("rta5");
    peritr.addEventListener('click',(e)=>{
    e.preventDefault();
    let l1=parseInt(document.getElementById("l1").value);
    let l2=parseInt(document.getElementById("l2").value);
    let l3=parseInt(document.getElementById("l3").value);
    let res=l1+l2+l3;
    let texto=`<p>El perimetro del Triangulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rtapt.innerHTML=texto
   })

//Area triangulo
let areatr=document.getElementById("abrirAreat");
let ventanatr=document.getElementById("ventanaModal6");
let cerrartr=document.querySelector(".cerrarModal5");

areatr.addEventListener("click", ()=>{
    ventanatr.style.display="block";
})
cerrartr.addEventListener("click", ()=>{
    ventanatr.style.display="none";
})
window.addEventListener("click",(e)=>{
    if (e.target==ventanatr) {
        ventanatr.style.display="none";
    }
})
    const areatri=document.getElementById("areatr");
    const rtatri=document.getElementById("rta6");
    areatri.addEventListener('click',(e)=>{
    e.preventDefault();
    let bas=parseInt(document.getElementById("bas").value);
    let alt=parseInt(document.getElementById("alt").value);
    let res=bas*alt/2;
    let texto=`<p>El area del Triangulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rtatri.innerHTML=texto
   })

//Perimetro Circulo 
let perci=document.getElementById("abrirModalcp");
let ventanapcr=document.getElementById("ventanaModal7");
let cerrarpcr=document.querySelector(".cerrarModal");

perci.addEventListener("click", ()=>{
    ventanapcr.style.display="block";
})
cerrarpcr.addEventListener("click", ()=>{
    ventanapcr.style.display="none";
})
window.addEventListener("click",(e)=>{
    if (e.target==ventanapcr) {
        ventanapcr.style.display="none";
    }
})
    const percr=document.getElementById("btnr");
    const rtapci=document.getElementById("respuesta");
    percr.addEventListener('click',(e)=>{
    e.preventDefault();
    let dia=parseInt(document.getElementById("dm").value);
    let res=2*3.1416*dia;
    let texto=`<p>El Perimetro del circulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rtapci.innerHTML=texto
   })

//Area circulo
let areaci=document.getElementById("abrirAreaC");
let ventanacr=document.getElementById("ventanaModal8");
let cerrarcr=document.querySelector(".cerrarModal8");

areaci.addEventListener("click", ()=>{
    ventanacr.style.display="block";
})
cerrarcr.addEventListener("click", ()=>{
    ventanacr.style.display="none";
})
window.addEventListener("click",(e)=>{
    if (e.target==ventanacr) {
        ventanacr.style.display="none";
    }
})
    const areacr=document.getElementById("btn2");
    const rtaci=document.getElementById("reta2");
    areacr.addEventListener('click',(e)=>{
    e.preventDefault();
    let rad=parseInt(document.getElementById("r2").value);
    let res=3.1416*rad*rad;
    let texto=`<p>El area de un Circulo es ${res} <i class="fa-solid fa-circle-check"></i></p>`;
    rtaci.innerHTML=texto
   })