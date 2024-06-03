const form = document.getElementById('form-notas');
const tabelaNotas = document.getElementById('tabela-notas');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;

    const tabela = document.createElement('table');
    tabela.border = '1';

    const cabecalho = document.createElement('tr');
    cabecalho.innerHTML = `
        <th>Nome</th>
        <th>Matrícula</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
    `;
    tabela.appendChild(cabecalho);

    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
    `;
    tabela.appendChild(linha);

    tabelaNotas.appendChild(tabela);
});