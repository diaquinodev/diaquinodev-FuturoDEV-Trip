const prompt = require("prompt-sync")();

function isValidEmail(email) {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const nome = prompt('Insira o nome do usuário: ');
            const idade = parseInt(prompt('Insira a idade do usuário: '));
            const email = prompt('Insira o email do usuário: ');

            if (nome && idade && isValidEmail(email)) {
                const userInfo = { nome, idade, email };
                resolve(userInfo);
            } else {
                reject(new Error('Por favor, insira todos os dados do usuário. '));
            }
        }, 2000); 
    });
}

async function obterDadosDoUsuario() {
    try {
        const userInfo = await getUserInfo();
        console.log('Informações do usuário: ', userInfo);
    } catch (error) {
        console.error('Erro ao obter informações do usuário: ', error);
    }
}


obterDadosDoUsuario();

