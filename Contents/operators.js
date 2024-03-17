// Operadores aritméticos : utilizados para realizar cálculos matemáticos.
let soma = 5 + 3; // Adição
let subtracao = 5 - 3; // Subtração
let multiplicacao = 5 * 3; // Multiplicação
let divisao = 5 / 3; // Divisão
let restoDivisao = 5 % 3; // Resto da divisão
let potencia = 5 ** 3; // Potência

// Exemplo de precedência dos operadores aritméticos:
let resultado = 5 + 3 / 2; // O resultado é 6.5 (primeiro a divisão, depois a adição).
let resultadoComParenteses = (5 + 3) / 2; // O resultado é 4 (primeiro a adição, depois a divisão).


// Operadores de atribuição
let x = 5;
x += 1; // Equivalente a x = x + 1
x -= 1; // Equivalente a x = x - 1
x *= 2; // Equivalente a x = x * 2
x /= 2; // Equivalente a x = x / 2
x %= 2; // Equivalente a x = x % 2

// Operadores relacionais
let maiorQue = 5 > 3;
let menorQue = 5 < 3;
let maiorIgual = 5 >= 3;
let menorIgual = 5 <= 3;
let igual = 5 == "5";
let igualEstrito = 5 === 5;
let diferente = 5 != 3;
let diferenteEstrito = 5 !== "5";

// Operadores lógicos
let negacao = !true;
let conjuncao = true && false;
let disjuncao = true || false;