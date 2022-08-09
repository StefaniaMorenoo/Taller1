
let contador=0;
let acomulador=0;
let i=true;
let general=parseInt(prompt("ingrese la cantidad general de su apuesta"));
while (i==true) {
    let random=Math.floor(Math.random(0)*2); 
    let eleccion=parseInt(prompt("ingrese 0=sello o 1=cara"));
    let apuesta=parseInt(prompt("ingrese la cantidad de su apuesta"));
    if (eleccion==random) {
        console.log (`el numero random fue ${random}`)
        acomulador=acomulador+apuesta;

    } else if(eleccion!=random){
        

    }
    
    contador=contador+1;
    i=confirm("Desea continuar?");
}

console.log (`Su saldo es: ${acomulador}, las veces que jugo fueron ${contador}`);