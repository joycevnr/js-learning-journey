// Function em JavaScript

// As funções em JavaScript são blocos de código reutilizáveis que podem ser chamados para executar uma determinada tarefa.

// Declaração de função:
function minhaFuncao() {
    console.log("Esta é uma função declarada.");
}

// Expressão de função:
const minhaOutraFuncao = function() {
    console.log("Esta é uma função expressa.");
};

// Arrow Function:
const minhaArrowFunction = () => {
    console.log("Esta é uma Arrow Function!");
};

// Parâmetros e retorno de função:
function soma(a, b) {
    return a + b;
}

const resultado = soma(3, 5);
console.log("Resultado da soma:", resultado);

// Funções podem retornar outras funções:
function funcaoPai() {
    console.log("Função pai.");
    return function() {
        console.log("Função filha.");
    };
}

const funcaoFilha = funcaoPai();
funcaoFilha(); // Chama a função filha retornada pela função pai.

// Escopo de variáveis:

// Variáveis declaradas dentro de uma função têm escopo local.
function funcaoLocal() {
    const mensagem = "Esta é uma variável local.";
    console.log(mensagem);
}

funcaoLocal(); // A variável 'mensagem' só é acessível dentro da função 'funcaoLocal'.
// console.log(mensagem); // Isso resultaria em um erro, pois 'mensagem' não está definido fora da função.

// Variáveis declaradas fora de uma função têm escopo global.
const mensagemGlobal = "Esta é uma variável global.";

function funcaoGlobal() {
    console.log(mensagemGlobal); // A função pode acessar variáveis globais.
}

funcaoGlobal(); // Chama a função que imprime a variável global.
console.log(mensagemGlobal); // Também podemos acessar a variável global fora da função.