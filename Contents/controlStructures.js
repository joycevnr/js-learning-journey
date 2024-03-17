// Estruturas de Controle em JavaScript

// for:  utilizado em comandos capazes de executar uma repetição de algo em uma quantidade que se conhece.
//for( inicialização ; expressão lógica ; instrução de atualização ) {}
console.log("Exemplo utilizando o for loop:");
for(let i = 0; i < 5; i++) {
    console.log("Contagem:", i);
}

for(let i in variavel) //acessa os indíces
// in no array acessa os índices
//in no objeto, vai retornar/acessa todos os nomes dos atribudos

for(let i of variavel) //acessa diretamente cada elemento

// for-in loop
console.log("\nExemplo utilizando o for-in loop:");
const person = {
    name: "Alice",
    age: 30,
    city: "São Paulo"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
}

// for-of loop
console.log("\nExemplo utilizando o for-of loop:");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Cor:" + color);
}

// while loop :  é quando se vai repetir os comandos até ele ser falso (enquanto for verdadeiro executa, se for falso não), em que não se sabe a quantidade específica de repetições, podendo assim entrar no chamado “LOOP infinito”, na qual não vai parar de executar até que seja falsa.
console.log("\nExemplo utilizando o while loop:");
let count = 0;
while (count < 5) {
    console.log("Contagem:" + count);
    count++;
}

// do-while loop
console.log("\nExemplo utilizando o do-while loop:");
let x = 0;
do {
    console.log("Número:", x);
    x++;
} while (x < 5);

// switch statement
console.log("\nExemplo utilizando o switch statement:");
const day = "Segunda";

switch (day) {
    case "Domingo":  //se day for igual a "Domingo" ele vai rodar o console.log e sair(só sai se colocar break) do switch e se não for ele vai continua
        console.log("Hoje é Domingo.");
        break; //parada
    case "Segunda":
        console.log("Hoje é Segunda.");
        break;
    case "Terça":
        console.log("Hoje é Terça.");
        break;
    case "Quarta":
        console.log("Hoje é Quarta.");
        break;
    case "Quinta":
        console.log("Hoje é Quinta.");
        break;
    case "Sexta":
        console.log("Hoje é Sexta.");
        break;
    case "Sábado":
        console.log("Hoje é Sábado.");
        break;
    default:
        console.log("Dia inválido.");
        break;
}
