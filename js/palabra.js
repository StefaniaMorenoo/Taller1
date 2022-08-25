
function iniciar(){
    let palabra=document.getElementById("palabra").value;

    let op=document.getElementById("opciones").value;
    if(op==1){
       
        alert(`La palabra "${palabra}" tiene ${palabra.length} caracteres`)
    }else if(op==2){
       
        alert(`La palabra "${palabra}", en mayuscula ${palabra.toUpperCase()} `)
   
    }else if(op==3){
  
        alert(`La palabra "${palabra}", en minuscula ${palabra.toLowerCase()}`)
   
    }else if(op==4){
        alert(`El primer carácter de "${palabra}" es ${palabra.charAt(0)}`)
   
    }
    
    
    
    
}