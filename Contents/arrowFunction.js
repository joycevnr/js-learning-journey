// Arrow Function em JavaScript

// As Arrow Functions são uma forma mais concisa de escrever funções em JavaScript.
// Elas são especialmente úteis para funções anônimas e funções de callback.

// Sintaxe básica:
const minhaArrowFunction = () => {
    console.log("Esta é uma Arrow Function!");
};

// Se a função tiver apenas um argumento, os parênteses são opcionais.
const funcaoComArgumento = arg => {
    console.log("O argumento é:", arg);
};

// Se a função tiver apenas uma expressão de retorno, as chaves e a palavra-chave 'return' são opcionais.
const funcaoDeRetorno = () => "Esta função retorna uma string.";

// Exemplo de uso de Arrow Function como função de callback em um array.
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(num => num * 2);

console.log("Números dobrados:", numerosDobrados);
