let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");

opciones.addEventListener('click', (e)=>{
    e.preventDefault();
    if (e.target.id=="opcion1") {
        let contenido=`Respuestan incorrecta`
        resp.innerHTML=contenido;
        resp.classList.add("incorrecto");
    }else if (e.target.id=="opcion2") {
        resp.innerHTML=`respuesta incorrecta`;
        resp.classList.add("incorrecto")
    }else if (e.target.id=="opcion3") {
        resp.innerHTML=`respuesta correcta`;
        resp.classList.add("correcto")
        resp.classList.remove("incorrecto")
    }else if (e.target.id=="opcion4") {
        resp.innerHTML=`respuesta incorrecta`;
        resp.classList.add("incorrecto")
    } 


})