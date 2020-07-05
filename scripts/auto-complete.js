
function mascaraCpf() {
    var cpf = document.getElementById('cpf').value;
    if (cpf.length == 3) {
        document.getElementById('cpf').value = cpf + '.';
    }
    else if (cpf.length == 7) {
        document.getElementById('cpf').value = cpf + '.';
    }
    else if (cpf.length == 11) {
        document.getElementById('cpf').value = cpf + '-';
    }
}

function mascaraCel() {

    var celular = document.getElementById('telefone').value;
    if (celular.length == 1) {
        document.getElementById('telefone').value = '(' + celular;
    }
    else if (celular.length == 3) {
        document.getElementById('telefone').value = celular + ')';
    }
    else if (celular.length == 9) {
        document.getElementById('telefone').value = celular + '-';
    }
}
