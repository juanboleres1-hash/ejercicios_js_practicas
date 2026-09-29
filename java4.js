 const readline = require('readline/promises');
 const { stdin: input, stdout: output } = require('process');
 
 async function pedirEdad() {
     const rl = readline.createInterface({ input, output });
 
   
     let edad = await rl.question('Ingresa su edad: ');
     const menor="Es MENOR de edad"
     const mayor = "Es MAYOR de edad"
 
     
     
 if (edad >= 18 ) {
     console.log(mayor);
 }  else {
     console.log(menor);
 }
 
     
     rl.close();
 }
 pedirEdad();