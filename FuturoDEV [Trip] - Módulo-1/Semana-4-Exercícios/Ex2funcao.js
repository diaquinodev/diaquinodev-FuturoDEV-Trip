const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Este número é par!";
    } else {
        return "Este número é ímpar!";
    }
}

rl.question("Por favor, digite um número: ", function(numeroDigitado) {

    var numero = parseInt(numeroDigitado);

    var resultado = verificarParOuImpar(numero);

    console.log(resultado);

    rl.close();
});
