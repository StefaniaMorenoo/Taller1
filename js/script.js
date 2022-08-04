

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

//Condional multiple

let op= prompt("Digite suma, resta, multiplicacion, division, potencia o raiz");
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
        let res=num1/num2;
        console.log(`El resultado de la division es ${res.toFixed(2)}`);
    break;
    case 'potencia':
        let pot=num1**num2;
        console.log(`El resultado de la potencia es ${pot.toFixed(2)}`);
    break;
    case 'raiz':
        let raiz=Math.sqrt(num1)
        console.log(`El resultado de la raiz cuadrada es ${raiz.toFixed(2)}`);
    break;
    default:
        alert("Opcion no esta en el sistema");
    break;
}
*/
//Ciclos
/*for (i=0; i<5; i++){
    console.log(`Hola soy ${nombre}`);
}
 let i=1;
while (i==1) {
    console.log(`Hola soy Stefania`);
    i=prompt("Seguir 1 o no 2")
    
}*/
//Consultar numeros aleatorios
let ia=1;
do {
    console.log(`Hola soy Stefania`);
    ia=confirm("Seguir 1 o no 2")
    
} while (ia==true);