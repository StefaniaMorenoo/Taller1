// Regla para nombre y documenyo ^[a-zA-ZÁ-ÿ\s]{1,40}
// Regla para numeros ^\d{7,10}$
// Regla para correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//PASSWORD  ^(?=.^\d)(?=.*[#$%@])(?=*a-z)(?=.^*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //SOLO LETRAS
    numeros:/^[0-9]{7,10}$/, //SOLO NÚMEROS
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}

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
    }else{
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check')
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation')
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
    
    }
} 

const validarCampos=(e)=>{
    console.log("SE genero un evento sobre el input" + e.target.name)
    switch (e.target.name) {
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
    
        case "nombre":
            if (reglas.textos.test(e.target.value)) {
                document.getElementById('g-nombre').classList.remove('error');
                document.getElementById('g-nombre').classList.add('success');
                document.querySelector('#g-nombre i').classList.add('fa-circle-check')
                document.querySelector('#g-nombre i').classList.remove('fa-circle-exclamation')
                document.querySelector('#g-nombre .msn-error').classList.remove('msn-error-visible')
            }else{
                document.getElementById('g-nombre').classList.remove('success');
                document.getElementById('g-nombre').classList.add('error');
                document.querySelector('#g-nombre i').classList.remove('fa-circle-check')
                document.querySelector('#g-nombre i').classList.add('fa-circle-exclamation')
                document.querySelector('#g-nombre .msn-error').classList.add('msn-error-visible')
            
            }
            
        break;

        case "apellido":
            if (reglas.textos.test(e.target.value)) {
                document.getElementById('g-apellido').classList.remove('error');
                document.getElementById('g-nombre').classList.add('success');
                document.querySelector('#g-nombre i').classList.add('fa-circle-check')
                document.querySelector('#g-nombre i').classList.remove('fa-circle-exclamation')
                document.querySelector('#g-nombre .msn-error').classList.remove('msn-error-visible')
            }else{
                document.getElementById('g-nombre').classList.remove('success');
                document.getElementById('g-nombre').classList.add('error');
                document.querySelector('#g-nombre i').classList.remove('fa-circle-check')
                document.querySelector('#g-nombre i').classList.add('fa-circle-exclamation')
                document.querySelector('#g-nombre .msn-error').classList.add('msn-error-visible')
            
            }
            
        break;

        case "telefono":
            
        break;

        case "correo":
            
        break;

        
        case "password":
            
        break;
        
        
        default :
        break;
    }
}

campos.forEach((campo)=>{
 campo.addEventListener("keyup",validarCampos);
 campo.addEventListener("blur",validarCampos)
})