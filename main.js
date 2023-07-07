const form = document.getElementById('form-atvidade');
const imgAprovado ='<img src="./images/Aprovado.png" alt="Emoji celerbando" />';
const imgReprovado ='<img src="./images/Reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado>Aprovado</span';
const spanReprovado = '<span class="resultado aprovado>Aprovado</span';
const notaMinima = parseFloat(propt("Digite a nota mínima:"));

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizarMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('note-atividade');

    if (atividades.includes(inputAtvidade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha = `<td>${inputNomeAtividade.value}</td>`;
    linha = `<td>${inputNotaAtividade.value}</td>`;
    linha = `<td>${inputNotaAtividade .value >=7 ? imgAprovado : imgReprovado}</td>`;
    linha = '</tr>';

    linhas +- linha;
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = documet.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function atualizaTabela() {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++) { 
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}