//CON VARIABLE YA DETERMINADA
// let numero = 7;

// if (numero % 2 === 0) {
//     console.log(`El número ${numero} es PAR.`);
// } else {
//     console.log(`El número ${numero} es IMPAR.`);
// }

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function pedirNumero() {
    const rl = readline.createInterface({ input, output });

  
    let respuesta1 = await rl.question('Ingresa el primer número: ');
    const par="SI es un numero par"
    const impar = "No es un numero par"

    
    
if (respuesta1 % 2 ===  0 ) {
    console.log(par);
}  else {
    console.log(impar);
}

    
    rl.close();
}
pedirNumero();