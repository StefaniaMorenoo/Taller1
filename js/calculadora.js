const btn= document.getElementById("button");

function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
        let res=num1+num2;
        alert(`El numero 1 es ${num1} y el número 2 ${num2} la suma es ${res}`)
    }else if(op==2){
        let res=num1-num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la resta es ${res}`)
   
    }else if(op==3){
        let res=num1*num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la multiplicación es ${res}`)
   
    }else if(op==4){
        let res=num1/num2;
        alert(`El numero 1 es ${num1} y el numero 2 ${num2} la division es ${res}`)
   
    }

    
}

btn.addEventListener('click', calcular);


const ops=document.getElementById("ops");
const rta=document.getElementById("respuesta")
ops.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target)
    console.log(e.target.id)

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);

    if (e.target.id=="sumabtn") {
        let res=num1+num2;
        console.log(`El numero 1 es "${num1}" y el número 2 "${num2}" la suma es ${res}`)
        let texto=`<p>La suma es ${res} <i class="fa-solid fa-circle-check"></i></p>`
        rta.innerHTML=texto
    }else if (e.target.id=="restabtn") {
        let res=num1-num2;
        console.log(`El numero 1 es "${num1}" y el numero 2 "${num2}" la resta es ${res}`)      
        let texto=`<p>La resta es ${res} <i class="fa-solid fa-circle-xmark"></i></p>`
        rta.innerHTML=texto;
        rta.style.setProperty('color','red')

    }
})
