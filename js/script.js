

let numero=25;

/*console.log("Hola mundo");  
console.log ("El numero es ", numero);
console.log(`El numero es ${numero}`);

let nombre="Stefania";
console.log(`El nombre es ${nombre}`);

let boolean= true;
console.log(`El estado es ${boolean}`);

let sena;
console.log(`La variable tiene un valor ${sena}`);

let res=numero+5;
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+10}`);

//window.alert("Esto es una alerta");
let estado=window.confirm("Acepta ");
console.log(`La consola arrojo ${estado}`);


let num1=prompt("Digite el primer numero");
let num2=parseInt (prompt("Digite el segundo numero")); 
 let res=parseInt(num1)+num2;
 console.log(`El resultado es ${res}`);

 //condicionales
/*
if (num1>num2) {
    console.log(`El numero ${num1} es mayor que ${num2} `);
}else if (num1==num2) {
    console.log(`El numero ${num1} y el numero ${num2} son iguales`);
} else {
    console.log(`El numero  ${num2} es mayor que ${num1}`);
}

//Operador ternario
let numayor=(num1>num2)
?"El numero mayor es el primero"
:"El numero mayor es el 2"
console.log(numayor);

//Condicionales con Condicion compuesta
let usuario = "Stefania";
let pass= "123456";

let ingreso= prompt("Digite su usuario");
let ingreso2=prompt("Digite La contraseña");

if (ingreso==usuario && ingreso2==pass){
    alert("Bienvenido");
}else if (ingreso===usuario && ingreso2!=pass){
    alert("Verifique su contraseña");
}else if (ingreso!=usuario && ingreso2==pass){
    alert("Verifique su usuario");
}else if (ingreso!=usuario && ingreso2!=pass){
    alert("Credenciales de usuario incorrectas");
}
*/
//Condional multiple

let op= prompt("Digite suma, resta, multiplicacion o division");
let num1= parseInt (prompt("Digite el numero 1"));
let num2=parseInt (prompt("Digite el numero 2"));

switch (op) {
    case 'suma':
        console.log(`El resultado de la suma es ${num1+num2}`);
    break;
    case 'resta':
        console.log(`El resultado de la resta es ${num1-num2}`);
    break;
    case 'multiplicacion':
        console.log(`El resultado de la multiplicacion es ${num1*num2}`);
    break;
    case 'division':
        console.log(`El resultado de la division es ${num1/num2}`);
    break;
    default:
        alert("Opcion no esta en el sistema");
    break;
}