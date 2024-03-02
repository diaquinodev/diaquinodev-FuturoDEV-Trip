Semana-05
Exercício-01
Criar uma lista contendo 3 frutas e exibir no console a segunda fruta do array.

Exercícios-02
Adicionar frutas ao array anterior e remover o primeiro item do array.

Exercício-03
Criar um array com 5 números e utilizar o loop for para imprimir no console.

Exercício-04
Calcular e imprimir números de um array, utilizando a função .reduce().

Exercício-05
Imprimir a lista de números em ordem crescente.

Exercício-06
Imprimir apenas números pares da array, utilizando o método filter().

Exercício-07
Imprimir o quadrado dos números do array.

Semana-06
Exercício-01
A função verificarParOuImpar recebe um número como parâmetro. Dentro da Promise, verifica-se se o valor passado é um número válido. Caso contrário, a Promise é rejeitada com uma mensagem de erro. Se o número for válido, verifica-se se é par ou ímpar, e a Promise é resolvida com a mensagem correspondente. O exemplo de uso solicita ao usuário que insira um número e, em seguida, chama a função verificarParOuImpar, passando o número digitado. O resultado é então tratado com .then() para lidar com o caso de sucesso e .catch() para lidar com erros.

Exercício-02
A função getUserInfo retorna uma Promise que é resolvida após um atraso de 2 segundos, fornecendo um objeto com informações fictícias de um usuário. O uso de async e await torna a chamada assíncrona mais legível. A função obterDadosDoUsuario chama getUserInfo usando await para esperar que a Promise seja resolvida, e um bloco try/catch trata possíveis erros durante a obtenção das informações do usuário. A função isValidEmail utiliza uma expressão regular para validar o formato do e-mail, e caso não corresponda, a função getUserInfo rejeita a Promise com uma mensagem de erro.
