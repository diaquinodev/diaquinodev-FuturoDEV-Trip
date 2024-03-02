Semana-04
Exercícios-02
Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

Exercícios-03
Crie uma arrow function que recebe um array de números e calcula a média deles.

OBS: para pegar o tamanho de um array use nomeDoArray.length

Exercícios-04
Implemente uma função chamada adicao que aceita dois números como argumentos e uma função anônima. Esta função deve simular uma operação de adição, onde os dois números são somados. Após a soma, chame a função passada como parâmetro e o resultado deve ser passado para a função anônima.

OBS: a função anônima apenas irá imprimir o resultado passado pelo parâmetro.

Exercícios-05
Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, será apenas aceita três tipos de avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram a série como ruim.

Exercícios-06
Utilizando estrutura de repetição for realize a tabuada do número 5 e exiba no console da seguinte forma:

5 x 0 = 0

5 x 1 = 5

5 x 2 = 10

....

5 x 10 = 50

Exercícios-07
Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:

(1)Hortifruti

(2)Laticínios

(3)Carnes

(4)Peixes

(5)Aves

(6)Fechar pedido

Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.


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
