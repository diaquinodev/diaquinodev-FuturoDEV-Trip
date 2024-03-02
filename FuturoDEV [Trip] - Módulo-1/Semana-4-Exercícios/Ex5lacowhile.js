const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function fazerEntrevista(contador = 0, numeroEntrevistados = 4) {
  const resposta = await perguntaAsync(`Qual a sua nota para a série "Stranger Things"? (ruim, bom ou excelente) `);

  if (resposta.trim().toLowerCase() === 'ruim') {
    contador++;
  }

  if (contador < numeroEntrevistados) {
    await fazerEntrevista(contador, numeroEntrevistados);
  } else {
    console.log(`Número de pessoas que classificaram a série como ruim: ${contador}`);
    rl.close();
  }
}

function perguntaAsync(pergunta) {
  return new Promise(resolve => {
    rl.question(pergunta, resolve);
  });
}

async function iniciarEntrevista() {
  await fazerEntrevista();
}

iniciarEntrevista();
