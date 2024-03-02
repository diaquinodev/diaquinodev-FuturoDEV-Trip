Semana-05
Exercício-01
Criar uma lista com 3 frutas e exibir no console a segunda fruta do array.

Exercícios-02
Adicionar frutas ao array anterior e remover o primeiro item do array.

Exercício-03
Criar um array com 5 números, usar o loop for para imprimir no console.

Exercício-04
Calcular e imprimir números de um array, utilizando .reduce.

Exercício-05
Imprimir a lista de números em ordem crescente.

Exercício-06
Imprimir apenas números pares da array, utilizando filter().

Exercício-07
Imprimir o quadrado dos números do array.

Semana-06
Exercício-01
A função verificarParOuImpar recebe um número como parâmetro. Dentro da Promise, verifica-se se o valor passado é de fato um número. Se não for um número válido, a Promise é rejeitada com uma mensagem de erro. Se o número for válido, verifica-se se é par ou ímpar e resolve-se a Promise com a mensagem correspondente. O exemplo de uso solicita ao usuário que insira um número e, em seguida, chama a função verificarParOuImpar passando o número digitado. O resultado é então tratado com .then() para lidar com o caso de sucesso e .catch() para lidar com erros.

Exercício-02
A função getUserInfo retorna uma Promise que é resolvida após um atraso de 2 segundos. Ela retorna um objeto com informações fictícias de um usuário. Utiliza-se async e await para tornar a chamada assíncrona mais legível e fácil de entender. A função obterDadosDoUsuario chama getUserInfo usando await para esperar que a Promise seja resolvida. Utiliza-se um bloco try/catch para lidar com possíveis erros durante a obtenção das informações do usuário. A função isValidEmail utiliza uma expressão regular para validar se o formato do e-mail é válido. Se o e-mail fornecido pelo usuário não corresponder ao formato esperado, a função getUserInfo rejeitará a Promise com uma mensagem de erro.
