//Arrays
/*let elec=['Televisor','Radio','Lavadora','Licuadora','Horno']
//Agregarr a la ultima posicion del areglo un dato
elec.push('aspiradora');
*Elimina al final del arreglo
elec.pop();

*Inserta al inicio o elimina al inicio del array
elec.unshift('Aspiradora')
elec.shift()

*Elimina las posiciones que no sean el inicio ni el final
elec.splice(1,3)
console.log(`La posisicion 3 es ${elec[3]} La longitud del array es ${elec.length}`);
console.log(`El ultimo elemento del array es ${elec.length-1}`);


elec.forEach(function(elemento,index,array){
    console.log(`Posición ${index} elemento ${elemento}`);
})

*Genera un nuevo arreglo a partir del filtro solicitado: filter()
*/

let aprendices=[
    {primernombre:"Stefania",primerapellido:"Moreno"},
    {primernombre:"nia",primerapellido:"Moreno"}
];
let nombre=aprendices.map(function(elemento,index,array) {
    return `${elemento.primernombre} ${elemento.primerapellido}`
})

console.log(nombre)
/*let conf=true;
while (conf==true) {

    aprendices.push(prompt("Ingrese nombre de aprendiz"))
    
    conf=confirm("Desea ingresar otro nombre?");
}

    console.log(aprendices)

    let filtro=aprendices.filter(aprendices=>aprendices=="Stefania");
    console.log(filtro);
//Ordenar
    let busq=aprendices.sort()
    console.log(busq)*/