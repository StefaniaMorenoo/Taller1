let contador=0;
let acomulador=0;
let resp=true;

    while (resp==true) {
        let dinero=parseInt(prompt("Ingrese la cantidad que desea guardar"));
        acomulador=acomulador+dinero;
        contador=contador+1;

        resp=confirm("Desea continuar?");
    }
    console.log (`Usted tiene  ${acomulador} y ha ingresado ${contador}`);