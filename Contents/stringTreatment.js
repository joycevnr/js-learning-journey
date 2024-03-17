// ***STRINGS EM JAVASCRIPT***

// As strings são sequências de caracteres, cercadas por aspas simples ou duplas, e são imutáveis, o que significa que não podemos alterar os valores de cada índice.

// Comandos:

// Tamanho da string
let nome = "joyce";
console.log(nome.length); // Output: 5

// Converter para maiúsculas/minúsculas
let nome1 = "Joyce Vitória";
console.log(nome1.toUpperCase()); // Output: JOYCE VITÓRIA
let nome2 = "NAScimento";
console.log(nome2.toLowerCase()); // Output: nascimento

// Dividindo a string
let nomeCompleto = "Joyce Vitória Nascimento";
let resultado = nomeCompleto.split(" ");
console.log(resultado); // Output: ["Joyce", "Vitória", "Nascimento"]

// Substituindo parte da string
const texto = "Resumo de algoritmos.";
const textoSubstituido = texto.replace("Resumo", "Revisão");
console.log(textoSubstituido); // Output: Revisão de algoritmos.

// Extraindo um caractere
const texto2 = "Resumo de algoritmos.";
const caractere = texto2.charAt(4);
console.log(caractere); // Output: m
//OU

const outro = "Resumo de algoritmos.";
const caract = outro[4];
console.log(caract); // saída: m

// Extraindo parte da string
const texto3 = "Resumo de algoritmos";
const parteDoTexto = texto3.slice(10, 19); //extrai o texto começando do índice 10 até o 19
console.log(parteDoTexto); // Output: algoritmo

// Iniciando a contagem a partir do final da string
const parteDoTexto2 = texto3.slice(-11, -1);
console.log(parteDoTexto2); // Output: algoritmo

// Verificando o início/fim da string
const texto4 = "Resumo de algoritmos";
const iniciaCom = texto4.startsWith("Resumo");
console.log(iniciaCom); // Output: true
const terminaCom = texto4.endsWith("algoritmos");
console.log(terminaCom); // Output: true

// Procurando parte da string
const texto5 = "Resumo de algoritmos";
const indice = texto5.indexOf("algoritmos");
console.log(indice); // Output: 10

// Verificando se contém uma substring
const texto6 = "Resumo de algoritmos";
const contemSubstring = texto6.includes("algoritmos");
console.log(contemSubstring); // Output: true

// Outros métodos úteis
const textos2 = "Exemplo de texto";
console.log(textos2.charCodeAt(0)); // retorna o código Unicode do caractere na posição especificada (saída: 69)
console.log("1".padStart(4, "0")); // preenche a string com zeros à esquerda até atingir o comprimento especificado (saída: 0001)
console.log("1".padEnd(4, "0")); // preenche a string com zeros à direita até atingir o comprimento especificado (saída: 1000)
console.log("abc".repeat(3)); // retorna uma nova string contendo o número especificado de cópias da string original (saída: "abcabcabc")
console.log("   trim()   ".trim()); // remove os espaços em branco do início e do final da string (saída: "trim()")