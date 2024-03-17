// *** ARRAY TREATMENT IN JAVASCRIPT ***

// Arrays são coleções de dados que podem conter zero ou mais elementos. Eles podem ser manipulados de várias maneiras em JavaScript.

// ## Commands

// - Filtrar elementos:

function numerosInteiros(numero) {
    return numero % 2 === 0; // Retorna verdadeiro se o número for divisível por 2 (ou seja, é par)
  }
  
  let inteiros = [1, 2, 3, -4, 5, 6, 7, -8, 9, 10].filter(numerosInteiros);
  console.log("Elementos inteiros do array:", inteiros);  // Saída: [2, -4, 6, -8, 10]
  
  // - Remover elementos:
     // Remove o último elemento do array
  let lista = ["resumo", "de", "algoritmos"];
  lista.pop();
  console.log("Array após remover o último elemento:", lista);
  
     // Remove o primeiro elemento do array
  lista = ["resumo", "de", "algoritmos"];
  lista.shift();
  console.log("Array após remover o primeiro elemento:", lista);
  
  // Adiciona elementos:
  
     // Adiciona elemento no final do array
  lista = ["de", "algoritmos"];
  lista.push("resumo");
  console.log("Array após adicionar um elemento ao final:", lista);
  
    // Adiciona elemento no início do array
  lista.unshift("resumo");
  console.log("Array após adicionar um elemento ao início:", lista);
  
  // - Encontrar elementos:
  
  // Retorna o índice do elemento "Vitória" no array
  lista = ["Joyce", "Vitória", "Nascimento"]
  let posicao = lista.indexOf("Vitória");
  console.log("Posição do elemento 'Vitória' no array:", posicao); // Saída: 1
  
  // - Verificar inclusão de elementos:
  
  // Verifica se o elemento "Vitória" está presente no array
  let incluso = lista.includes("Vitória");
  console.log("O elemento 'Vitória' está presente no array?", incluso); // Saída: true
  
  // - Ordenar elementos:
  
  // Ordena os elementos em ordem crescente
  let numeros = [8, 3, 9, 1, 2, 4, 7];
  numeros.sort((a, b) => a - b);
  console.log("Array ordenado:", numeros); // Saída: [1, 2, 3, 4, 7, 8, 9]
  