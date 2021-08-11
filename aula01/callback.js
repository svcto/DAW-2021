function inicio() {
    const variavel = 'Inicio da função';
    console.log(variavel);
}

const init = function() {
    console.log('inicio alternativo');
}

function processa(inicio, fim) {
    inicio()
    const variavel = 'Executando processo';
    console.log(variavel);
    
    fim();
}

function fim() {
    const variavel = 'Finalizando execução do processo';
    console.log(variavel);
}

function run() {
    processa(inicio, fim)
}

run();