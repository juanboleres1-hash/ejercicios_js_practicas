 const readline = require('readline/promises');
 const { stdin: input, stdout: output } = require('process');
 
 async function pedirNombre() {
     const rl = readline.createInterface({ input, output });
 
   
     let nombre = await rl.question('Ingresa tu nombre: ');
    console.log(`Hola ${nombre}`)
 
     
     

 
     
     rl.close();
 }
 pedirNombre();