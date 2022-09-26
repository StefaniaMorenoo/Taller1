function calcular(){
    let temp=parseInt(document.getElementById("temp").value);
    let temp1=parseInt(document.getElementById("temp1").value);
    let temp2=parseInt(document.getElementById("temp2").value);
    if(temp1==1 && temp2==2){
        let res=(temp*9/5)+32;
        alert(`La conversion de grados Celsius ${temp} a Fahrenheit es ${res}°F`)
    }else if(temp1==2 && temp2==1){
        let res=(temp-32)*5/9 ;
        alert(`La conversion de grados Fahrenheit ${temp} a grados celsius es ${res}`)
   
    }else if(temp1==3 && temp2==1){
        let res=(temp-273.15);
        alert(`La conversion de Kelvin ${temp} a grados celsius es ${res}`)
   
    }else if(temp1==1 && temp2==3){
        let res=(temp+273.15);
        alert(`La conversion de Celsius ${temp} a Kelvin es ${res}`)
   
    }else if(temp1==2 && temp2==3){
        let res=(temp-32*5/9+273.15);
        alert(`La conversion de Fahrenheit ${temp} a Kelvin es ${res}`)
   
    }else if(temp1==3 && temp2==2){
        let res=(temp-273.15*9/5+32);
        alert(`La conversion de Kelvin ${temp} a Fahrenheit es ${res} °F`)
   
    }else{
        alert(`La conversion no se puede realizar`)
   
    }
    
    
    
    
}