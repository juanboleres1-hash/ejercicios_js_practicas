const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function pedirNumeros() {
    const rl = readline.createInterface({ input, output });

  
    let respuesta1 = await rl.question('Ingresa el primer número: ');
    

    let respuesta2 = await rl.question('Ingresa el segundo número: ');

    
    let suma = Number(respuesta1) + Number(respuesta2);
let resta = Number(respuesta1) - Number(respuesta2);
    let multiplicacion = Number(respuesta1) * Number(respuesta2);
let Division = Number(respuesta1) / Number(respuesta2);
let potencia = Number(respuesta1) ** Number(respuesta2);


    console.log(`El resultado de la suma es: ${suma}`);
 console.log(`El resultado de la resta es: ${resta}`);
  console.log(`El resultado de la multiplicacion es: ${multiplicacion}`);
   console.log(`El resultado de la division es: ${Division}`);
    console.log(`El resultado de la potencia es: ${potencia}`);
    rl.close();
}
//ESTO SERIA NORMAL SIN NODE.JS ES DECIR QUE EN UN DISEÑADOR WEB NORMAL SE PROGRAMARIA ASI:

// let numero1 = prompt("Ingresa el primer número:");
// let numero2 = prompt("Ingresa el segundo número:");

// let suma = Number(numero1) + Number(numero2);

// console.log("El resultado es: " + suma);

pedirNumeros();