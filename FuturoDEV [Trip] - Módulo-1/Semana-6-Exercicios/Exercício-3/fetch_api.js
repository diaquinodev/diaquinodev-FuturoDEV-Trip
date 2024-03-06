async function fetchData() {
    try {
        const response = await fetch('data.json');
        const jsonData = await response.json();

        displayData(jsonData);
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro na requisição. Por favor, tente novamente.');
    }
}

function displayData(data) {
    const jsonContentDiv = document.getElementById('json-content');
    jsonContentDiv.innerHTML = `
        <h2>Conteúdo JSON:</h2>
        <p>Nome: ${data.nome}</p>
        <p>Idade: ${data.idade}</p>
        <p>Email: ${data.email}</p>
    `;
}

fetchData();
