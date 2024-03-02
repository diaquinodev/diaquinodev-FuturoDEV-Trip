const calcularMedia = (numeros) => {
    if (numeros.length === 0) {
      return "O array está vazio, não é possível calcular a média.";
    }
  
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / numeros.length;
  
    return media;
  };
  
  const numerosExemplo = [1, 2, 3, 4, 5];
  const resultadoMedia = calcularMedia(numerosExemplo);
  console.log(`A média é: ${resultadoMedia}`);
  