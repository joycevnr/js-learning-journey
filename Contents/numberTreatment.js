// Commands in JavaScript:

// Converter:
// Números naturais
let string1 = "20";
let toNatural = parseInt(string1);
console.log(toNatural);  // Output: 20

// Números decimais/inteiros
let string2 = "16.4";
let toInteger = parseFloat(string2);
console.log(toInteger); // Output: 16.4

// Todos os números
let string3 = "10.01";
let allNumbers = Number(string3);
console.log(allNumbers); // Output: 10.01

// Mais de um número
let numbers = ["1", "2", "5", "9"].map(Number);
let sum = numbers[2] + numbers[3];
console.log(sum); // Output: 14

// Contas matemáticas:
// Raiz quadrada
let squareRoot = Math.sqrt(64);
console.log(squareRoot); // Output: 8

// Potência
let power = Math.pow(2, 5); // Base, Exponent
console.log(power); // Output: 32

// Valor absoluto
let absValue = Math.abs(-10);
console.log(absValue); // Output: 10

// Arredondar
let roundNumber = Math.round(4.85534);
console.log(roundNumber); // Output: 5

// Math.floor()
// Para arredondar o número para baixo para o número inteiro mais próximo.

// Quantidade de números após o ponto
let num = 4.74534;
console.log(num.toFixed(1)); // Output: 4.7

// Math.random
function randomFraction() {
  return Math.random();
}

// Fatorial de um número 
function factorial(n) {
  let total = n;
  for (let i = 1; i < n; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(4)); // Output: 24

// Outro método para calcular o fatorial
let num2 = 4;
let fact = 1;
let i = num2;
while (i >= 1) {
  fact = fact * i;
  i--;
}
console.log("Fatorial de " + num2 + " é " + fact); // Output: 24

// Maior e Menor número em um array
let array = [10, 5, 8, 20, 3];
let maxNumber = Math.max(...array);
let minNumber = Math.min(...array);
console.log("Maior número: " + maxNumber); // Output: 20
console.log("Menor número: " + minNumber); // Output: 3