// Regla para nombre y documenyo ^[a-zA-ZÁ-ÿ\s]{1,40}
// Regla para numeros ^\d{7,10}$
// Regla para correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//PASSWORD  ^(?=.^\d)(?=.*[#$%@])(?=*a-z)(?=.^*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //SOLO LETRAS
    numeros:/^[0-9]{7,10}$/, //SOLO NÚMEROS
    correo: /^[a-zA-Z0-9_.+-]+@+[misena]+.[edu]+.[c]+[o]$/, //CORREOS
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}

const inputs={
    numdoc:false,
    nombre:false,
    apellido:false,
    correo:false,
    telefono:false,
    password:false
}

//Acceder al forumulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input")
form.addEventListener('submit',e=>{
    e.preventDefault();

})

const validarInput=(regla,input,grupo)=>{
    if (regla.test(input.value)) {
        document.getElementById( `g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-check')
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation')
        document.querySelector(`#g-${grupo}  .msn-error`).classList.remove('msn-error-visible')
        inputs[grupo]=true;
    }else{
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation')
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
        inputs[grupo]=false;
    }
} 

const validarPassword=()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('password2');

    if (pass1.value === pass2.value){
        document.getElementById(`g-password2`).classList.remove('error');
        document.getElementById(`g-password2`).classList.add('success');
        document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');
        document.querySelector(`#g-password2 i`).classList.add('fa-circle-check')
        document.querySelector(`#g-password2 i`).classList.remove('fa-circle-exclamation')
        inputs['password'] = true;
    } else {
        document.getElementById(`g-password2`).classList.add('error')
        document.getElementById(`g-password2`).classList.remove('success');; 
        document.querySelector(`#g-password2 .msn-error`).classList.add('msn-error-visible');
        document.querySelector(`#g-password2 i`).classList.remove('fa-circle-check')
        document.querySelector(`#g-password2 i`).classList.add('fa-circle-exclamation')
        inputs['password'] = false;
    }
}

const validarCampos=(e)=>{
    console.log("SE genero un evento sobre el input" + e.target.name)
    switch (e.target.name) {
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
    
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name)
        break;

        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name)
        break;

        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;

        case "correo":
            validarInput(reglas.correo,e.target,e.target.name)
        break;

        //Duplicidad de contraseña
        case "password":
         
            validarInput(reglas.password,e.target,e.target.name)
            validarPassword();
        break;
        case "password2":
            validarPassword();
        break;
        
        
        default :
        break;
    }
}

campos.forEach((campo)=>{
 campo.addEventListener("keyup",validarCampos);
 campo.addEventListener("blur",validarCampos)
})
form.addEventListener('submit',e=>{
    e.preventDefault();
    const terminos=document.getElementById("terminos");
    if (inputs.numdoc && inputs.nombre && inputs.apellido && inputs.correo 
        && inputs.telefono && inputs.password && terminos.checked) {
        alert("El usuario ha sido registrado")
        form.reset();
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('success')
        })
    }
    else{
        alert("los datos no cumplen")
        document.querySelectorAll('.success').forEach(icono=>{
            icono.classList.remove('error')
        })
    }
})

//Acceder al boton para abrir el modal
let modal=document.getElementById("terminos");
let ventana=document.getElementById("ventanaModal");
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
