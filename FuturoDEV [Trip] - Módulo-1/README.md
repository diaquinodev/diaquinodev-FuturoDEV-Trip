
  <h1>Semana-04</h1>

  <h2>Exercício-01</h2>
  <p>Criar uma lista com 3 frutas e exibir no console a segunda fruta do array.</p>

  <h2>Exercício-02</h2>
  <p>Adicionar frutas ao array anterior e remover o primeiro item do array.</p>

  <h2>Exercício-03</h2>
  <p>Criar um array com 5 números e utilizar o loop for para imprimir no console.</p>

  <h2>Exercício-04</h2>
  <p>Calcular e imprimir números de um array, utilizando a função <code>.reduce()</code>.</p>

  <h2>Exercício-05</h2>
  <p>Imprimir a lista de números em ordem crescente.</p>

  <h2>Exercício-06</h2>
  <p>Imprimir apenas números pares da array, utilizando o método <code>filter()</code>.</p>

  <h2>Exercício-07</h2>
  <p>Imprimir o quadrado dos números do array.</p>

  <h1>Semana-05</h1>
<h2>Exercício-01</h2>
<p>Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.

Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.</p>

<h2>Exercício-02</h2>
<p>Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.</p>

<h2>Exercício-03</h2>
<p>Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.</p>

<h2>Exercício-04</h2>
<p>Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.</p>

<h2>Exercício-05</h2>
<p>Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.</p>

<h2>Exercício-06</h2>
<p>Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.</p>

<h2>Exercício-07</h2>
<p>Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.</p>


  <h1>Semana-06</h1>

  <h2>Exercício-01</h2>
  <p>A função <code>verificarParOuImpar</code> recebe um número como parâmetro. Dentro da Promise, verifica-se se o valor passado é de fato um número. Se não for um número válido, a Promise é rejeitada com uma mensagem de erro. Se o número for válido, verifica-se se é par ou ímpar e resolve-se a Promise com a mensagem correspondente. O exemplo de uso solicita ao usuário que insira um número e, em seguida, chama a função <code>verificarParOuImpar</code> passando o número digitado. O resultado é então tratado com <code>.then()</code> para lidar com o caso de sucesso e <code>.catch()</code> para lidar com erros.</p>

  <h2>Exercício-02</h2>
  <p>A função <code>getUserInfo</code> retorna uma Promise que é resolvida após um atraso de 2 segundos. Ela retorna um objeto com informações fictícias de um usuário. Utiliza-se <code>async</code> e <code>await</code> para tornar a chamada assíncrona mais legível e fácil de entender. A função <code>obterDadosDoUsuario</code> chama <code>getUserInfo</code> usando <code>await</code> para esperar que a Promise seja resolvida. Utiliza-se um bloco <code>try/catch</code> para lidar com possíveis erros durante a obtenção das informações do usuário. A função <code>isValidEmail</code> utiliza uma expressão regular para validar se o formato do e-mail é válido. Se o e-mail fornecido pelo usuário não corresponder ao formato esperado, a função <code>getUserInfo</code> rejeitará a Promise com uma mensagem de erro.</p>

</body>
</html>
