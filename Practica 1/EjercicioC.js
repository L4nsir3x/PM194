const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años.`;

rl.question('Ingresa tu nombre: ', (nombre) => {
  rl.question('Ingresa tu edad: ', (edad) => {
    console.log(saludoPersonalizado(nombre, edad));
    rl.close();
  });
});
