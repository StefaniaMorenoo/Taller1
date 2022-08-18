
/*invocar funcion
lanzarmoneda()*/

//Declarar la funcion por declaracion 
    /* function lanzarmoneda() {
        let moneda=Math.floor((Math.random()*2)+1);
        return moneda;
    }
   Invocar la funcion con valor d retorno
  console.log(`El lanzamiento fue ${lanzarmoneda}`)
  let lanzamiento=lanzarmoneda();
  console.log(`El lanzamiento fue ${lanzamiento}`)*/

//Funcion por expresion, almacenada dentro d una variable
 let lanzar=function lanzarmoneda() {
    let moneda=Math.floor((Math.random()*2)+1);
    return moneda;
 }
 //Funcion anonima
  let ganar=function(saldo,apuesta) {
        saldo=saldo +(apuesta)
        return saldo;   
  }

  //Function arrow
  let perder=(saldo, apuesta)=> {
        saldo=saldo-apuesta
        return saldo;
  }

  let seguir=true;
  let saldo=0;
  let jugador=prompt("ingrese su nombre");
  saldo=parseInt(prompt("Cuanto desea recargar para jugar"));

    while (seguir==true) {
        let eleccion=prompt(`${jugador} Elija 1 para Cara o 2 para sello`);
        let apuesta=parseInt(prompt(`De su saldo actual ${saldo}, Cuánto desea apostar`))
        let lanzamiento=lanzar;

        if (lanzamiento==eleccion) {
            saldo=ganar(saldo,apuesta);
            console.log(`El lanzamiento es igual al de la maquina, Gano!, su nuevo saldo es ${saldo}`)

        } else if(lanzamiento!=eleccion){
            saldo=perder(saldo,apuesta);
            console.log(`El lanzamiento no es igual al de la maquina, Perdio,  su nuevo saldo es ${saldo}`)
            
        }


        seguir=confirm("Desea continuar")
    }