const button = document.querySelector('#enviar');
const nome = document.querySelector('#nome');
const escola = document.querySelector('#escola');
const cpf = document.querySelector('#cpf');
const nac = document.querySelector('#nac');
const est = document.querySelector('#est');
const cid = document.querySelector('#cid');
const nome_result = document.querySelector('#nome_result');
const escola_result = document.querySelector('#escola_result');
const cpf_result = document.querySelector('#cpf_result');
const nacionalidade_result = document.querySelector('#nacionalidade_result');
const estado_result = document.querySelector('#estado_result');
const cidade_result = document.querySelector('#cidade_result');


// Funções para a formatação do input CPF

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

function aoInserirCPF(evento) {
    const entrada = evento.target;
    entrada.value = formatarCPF(entrada.value);
}

// Eventos do botão Enviar

button.addEventListener('click', () => {
    if (cpf.value.length == 0 || escola.value.length == 0 || nome.value.length == 0) {
        alert('Preencha todos os campos')
    } else {
        nome_result.innerHTML = nome.value;
        escola_result.innerHTML = escola.value;
        cpf_result.innerHTML = cpf.value;
        nacionalidade_result.innerHTML = nac.value;
        estado_result.innerHTML = est.value;
        cidade_result.innerHTML = cid.value;
    }
})
