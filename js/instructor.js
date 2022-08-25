const opc=document.getElementById("opc");
const rta=document.getElementById("respuesta")
opc.addEventListener('click',(e)=>{
    console.log(e.target.id)    
    e.preventDefault();

    let nom=document.getElementById("nombre").value;
    let ape=document.getElementById("apellido").value;
    let act=document.getElementById("actividad").value;


    
    if (nom==1 && ape==1 && act==1) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto
    }else if (nom==2 && ape==2 && act==2) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else if (nom==3 && ape==3 && act==3) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else if (nom==4 && ape==4 && act==4) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else if (nom==5 && ape==5 && act==5) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else if (nom==6 && ape==6 && act==6) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else if (nom==7 && ape==7 && act==7) {
        let texto=`<p>Nombre y apellido correspondiente a la actividad <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto

    }else{
        let texto=`<p>Respuesta incorrecta <i class="fa-solid fa-circle-xmark"></i></p>`
        rta.innerHTML=texto;
    }
})