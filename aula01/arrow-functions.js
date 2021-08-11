function inicio() {
    const variavel = 'Inicio da função';
    console.log(variavel);
}

function fim() {
    const variavel = 'Finalizando execução do processo';
    console.log(variavel);
}

const init = function() {
    console.log('inicio alternativo');
}

const processa = () => {
    inicio()
    const variavel = 'Executando processo';
    console.log(variavel);
}

function run() {
    processa();
}

run();