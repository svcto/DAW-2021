function inicio() {
    const variavel = 'Inicio da função';
    console.log(variavel);
}

function meio() {
    const variavel = 'Executando processo';
    return variavel;
}

function fim() {
    const variavel = 'Finalizando execução do processo';
    console.log(variavel);
}

function run() {
    inicio();
    console.log(meio())
    fim();
}

run();