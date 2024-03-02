const adicao = (numero1, numero2, funcaoAnonima) => {
    const resultado = numero1 + numero2;
    funcaoAnonima(resultado);
  };
  
  adicao(3, 5, (resultado) => {
    console.log(`O resultado da adição é: ${resultado}`);
  });
  