
function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);

    if(num1==num2 && num2==num3){
        alert(`Todos los lados son iguales, el triángulo es Equilatero`)
    }else if(num1==num2 && num2!=num3 || num1==num3 || num2==num3){
        alert(`Dos lados son iguales, el triángulo es Isósceles`)
   
    }else if(num1!=num2 && num2!=num3){
        alert(`Ninguno de sus lados es igual, el triángulo es Escaleno`)
   
    }
    
    
    
    
}